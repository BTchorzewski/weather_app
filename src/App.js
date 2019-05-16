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
        tempeture: 0,
        pressure: 0,
        humidity: 0,
        temp_max: 0,
        temp_min: 0,
        sunrise: 0,
        sunset: 0
      }
    }
  }

  componentDidMount() {
    this.fetchCoords();
  }
  fetchWeatherCoords(latitude, longitude) {
    console.log(`openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API}`);
    axios.get(`openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API}`)
      .then((response => {
        console.log(response);
      }));
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.setCoords(position);
      this.fetchWeatherCoords(this.state.coord.lat, this.state.coord.lon);
      console.log(this.state.coord.lat)
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
  render() {
    return ( 
    <div>
      <p>{this.state.coord.lat}</p>
      
      <Display weather={this.state.weather} />
      <Search 
        getCity={this.fetchCity}
        city={this.state.city}
      />
    </div>
      
    );
  }
}

export default App;
