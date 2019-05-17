import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Display from './components/Display';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coord: {
        lon: 0,
        lat: 0
      },
      city: '',
      weather: {
        main: '',
        description: '',
        temp: 0,
        pressure: 0,
        humidity: 0,
        temp_max: 0,
        temp_min: 0,
        sunrise: 0,
        sunset: 0,
        name: ''
      } 
    }
  }

  componentDidMount() {
    this.fetchCoords();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.coord !== this.state.coord) {
      return true;
    }
    console.log(nextState.coord, this.state.coord)
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    
    if(this.state.coord !== prevState.coord){
      this.fetchWeatherCoords();
      
    } 
    this.setState({
      coord: this.state.coord
    })    
  }

  fetchWeatherCoords() {
    // `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API}`
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API}`)
    .then(response => {
      console.log(response.data.main)
      this.setWeather(response.data);
    })
      
  }
  
  setCity(cityName) {
    this.setState({
      city: cityName
    })
  }
  
  fetchCity(event) {
    this.setState({
      city: event.target.value
    });
  }
  
  fetchCoords() {
    navigator.geolocation.getCurrentPosition( position => {
      this.setCoords(position);
    });
  }
  
  setCoords(param) {
    this.setState({
      coord: {
        lon: param.coords.longitude,
        lat: param.coords.latitude
      }
    })
  }

  setWeather(response) {
    // Destructuring object
    const { 
      main: {
        temp,
        pressure,
        humidity,
        temp_max,
        temp_min,
      },
      name, 
      sys: { 
        sunrise,
        sunset 
        }
      } = response;
    // Destructuring array
    const [{main, description}] = response.weather;
    this.setState({
      weather: {
        temp,
        pressure,
        humidity,
        temp_max,
        temp_min,
        sunrise,
        sunset,
        name,
        main,
        description
      }
    })
  }

  render() {
    return ( 
    <div>
      {
        this.state.weather.temp === 0 ? <p>loading</p> :  <Display weather={this.state.weather} />
      }
      
      <Search 
        getCity={this.fetchCity}
        city={this.state.city}
      />
    </div>
      
    );
  }
}

export default App;
