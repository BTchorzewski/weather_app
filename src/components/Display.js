import React, { Component } from 'react'
import jsonp from 'jsonp';
export default class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: '',
            icon: '',
            temperatureInCelsius: 0,
            temperatureInFahrenheit: 0,
            pressure: 0,
            windSpeed: 0
        }
        this.weatherCallback = this.weatherCallback.bind(this);    
    }
    componentDidMount() {
        this.getWeather();
    }
    weatherCallback(error, data) {
        const { currently: {summary, icon, temperature: temperatureInFahrenheit , pressure, windSpeed} } = data;
            this.setState({
                summary: summary,
                icon: icon,
                temperatureInCelsius: Math.round(5/9*(temperatureInFahrenheit-32),1),        
                pressure: pressure,
                windSpeed: windSpeed
            })
    }
    getWeather() {
        jsonp('https://api.darksky.net/forecast/55470d52f688b359f7236d2a21f75675/37.8267,-122.4233', this.weatherCallback)
    }

    render() {
        return (
            <div>
                {process.env.REACT_APP_TEST}
            </div>
        )
    }
}
