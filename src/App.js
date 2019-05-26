import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Display from './components/Display';
import '../src/index.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 92rem) {
    width: 35%;
  }

  @media (max-width: 72rem) {
    width: 50%;
  }

  @media (max-width: 36rem) {
    width: 80%;
  }
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coord: {
        lon: 0,
        lat: 0
      },
      city: '',
      input: '',
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
      },
      units: true 
    }
    this.inputCity = React.createRef();
    this.fetchCoords = this.fetchCoords.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
  }

  componentDidMount() {
    this.fetchCoords();
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if(this.state.coord !== prevState.coord){
      console.log('Coords updated');  
      this.fetchWeatherCoords();
      
    }
    if(this.state.city !== prevState.city){
      console.log('City updated')
      this.fetchWeatherCity();

    }
    if(this.state.city === '' && prevState.city !== '' && this.state.coord.lat !== 0 ) {
      console.log('city is empty and coords are choosen')
      this.fetchWeatherCoords();
    }

  }
  


  fetchWeatherCoords() {
    console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API}`)
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
    .then(response => {
      console.log(response.data)
      this.setWeather(response.data);
    })
      
  }
  
  fetchWeatherCity() {
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${process.env.REACT_APP_WEATHER_API}`)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
    .then(response => {
      this.setWeather(response.data);
      
    })

  }
  
  handleInput(event) {
    this.setState({
      input: event.target.value
    })
  }

  cleanInput() {
    this.setState({
      input: ""
    })
  }

  handleChangedCity = (event) => {
    event.preventDefault();
    this.setState({
      city: this.inputCity.value
    })
    
  }
  
  fetchCoords() {
    navigator.geolocation.getCurrentPosition( position => {
      this.setCoords(position);
      this.cleanInput();
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
    const [{main, description, icon}] = response.weather;
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
        description,
        icon
      }
    })
  }

  changedUnit() {
    this.setState({
      units: !this.state.units
    })
  }
  render() {
    return ( 
    <Wrapper>
      {
        this.state.weather.temp === 0 ? <p>Blocked</p> :  <Display weather={this.state.weather} units={this.state.units} changedUnit={this.changedUnit.bind(this)}/>
      }
     
      <Search 
        changed={this.handleChangedCity.bind(this)}
        handleCoords={this.fetchCoords} 
        inputRef={el => this.inputCity = el } 
        handleInput={this.handleInput}
        input={this.state.input}
      />
      
    </Wrapper>
      
    );
  }
}

export default App;
