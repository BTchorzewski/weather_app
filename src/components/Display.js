import React from 'react';
import City from './City'
import Settings from './Settings';
import Temperature from './Temperature';
import Description from './Description'
import Icon from './Icon';
import styled from 'styled-components'
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:rgb(43, 114, 229);
    padding-bottom: 1rem;
    border-radius: .5rem;
    padding: 2rem 3rem;
    color: #fff;

`; 

const Display = (props) => {
    return (
        <Wrapper>
            <Settings changedUnit={props.changedUnit} units={props.units}></Settings>
            <Icon icon={props.weather.icon}/>
            <Description text={props.weather.description}></Description>
            <Temperature temp={props.weather.temp} units={props.units}/>
            <City city={props.weather.name}></City>
            
            <p>{props.weather.temp_max}</p>
            <p>{props.weather.temp_min}</p>
            <p>{props.weather.pressure}</p>
            <p>{props.weather.humidity}</p>
            <p>{props.weather.main}</p>
            
            
            
        </Wrapper>
    )
}
export default Display;


// weather: {
//     temp,
//     pressure,
//     humidity,
//     temp_max,
//     temp_min,
//     sunrise,
//     sunset,
//     name,
//     main,
//     description,
//     icon 
// }