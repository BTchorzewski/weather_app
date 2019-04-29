import React, { Component } from 'react';
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: red;
    width: 600px;
    height: 100px;
    border-radius: 5%;
`
const Defaultstyles = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const Dropcontainer = styled.div`
    height: 300px;
    overflow-y: scroll; 
`


const DropItem = styled.p`
    font-size: 16px;
    text-align: center;
    width: 600px;
    margin: 5px 0;
    background-color: greenyellow;
    border-radius: 1000px;
`

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            geolocation: null,
            coordinates: {
                latitude: '',
                longitude: ''
            },
            locations: [],
            location: {
                city: '',
                country: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setLocation = this.setLocation.bind(this)
    }
    
    componentDidMount() {
        this.getGeolocationCoordinates();
    }
    
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        this.getCities();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            locations: []
        });
        
    }
    
    getGeolocationCoordinates() {
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    geolocation: true,
                    coordinates: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude  
                    }
                })
              });    
        } else {
            /* geolocation IS NOT available */
            this.setState({
                geolocation: false
            })
          }
    }
    
    getCities() {
        return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API}&location=${this.state.input}`)
            .then(response => response.json())
            .then(jsonFile => {
                console.log(jsonFile);
                this.setState({
                    locations: jsonFile.results[0].locations
                })
            })
            .catch(error => console.log(error))    
    }
    // setLocation doesnt work.
    setLocation(event) {
        this.setState({
            input: event.target.innerText,
            
        })
    }
    
    render() {
        return (
            <div className='search'>
                <Defaultstyles />
                <ul>
                    <li>{this.state.coordinates.latitude}</li>
                    <li>{this.state.coordinates.longitude}</li>
                </ul>
                <StyledForm>
                    <label className='search__label'>Write your city:</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.input} 
                    />
                    <button type='submit' onClick={this.handleSubmit}>Find Coords</button>
                </StyledForm>
                <Dropcontainer>
                {
                    this.state.locations.map( (location, index) => {
                        const { adminArea1: country, adminArea5: city } = location;
                        if(country !== '' && city !== '') {
                            return <DropItem onClick={this.setLocation} key={index}>{city},{country}</DropItem>
                        }
                    } )
                }
                </Dropcontainer>
            </div>
        )
    }
}

export default Search;