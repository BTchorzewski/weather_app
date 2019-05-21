import React from 'react';
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
            <Icon icon={'10d'}/>
            <Description text={"Mist on the city"}></Description>
            <Temperature temp={props.weather.temp} units={props.units}/>
            <p>{props.weather.description}</p>
            <p>{props.weather.temp_max}</p>
            <p>{props.weather.temp_min}</p>
            <p>{props.weather.pressure}</p>
            <p>{props.weather.humidity}</p>
            <p>{props.weather.main}</p>
            
            <p>{props.weather.name}</p>
            
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