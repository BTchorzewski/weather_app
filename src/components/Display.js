import React from 'react';
import City from './City'
import Settings from './Settings';
import Temperature from './Temperature';
import Description from './Description';
import Pressure from './Pressure';
import Humidity from './Humidity'
import Icon from './Icon';
import styled from 'styled-components'
const Wrapper = styled.div`
    background-color: rgb(235, 237, 244);
    padding: 5rem 2rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    text-align: left;
    width: 60%;
    @media only screen and (max-width: 37.5em) {
        width: 95%;
    }
`; 

const Subwrapper = styled.div`
    display: flex;
    margin-bottom: 2rem;
    position: relative;
`;

const Display = (props) => {
    return (
        <Wrapper>
        
            
            <Subwrapper>
                <Temperature temp={props.weather.temp} units={props.units}/>
                <Settings changedUnit={props.changedUnit} units={props.units}></Settings>
            </Subwrapper>
            <City city={props.weather.name}></City>
            <Pressure pressure={props.weather.pressure}/>
            <Humidity humidity={props.weather.humidity}/>
            <Subwrapper>
                <Icon icon={props.weather.icon}/>
                <Description text={props.weather.description}/>
            </Subwrapper>
            
        </Wrapper>
    )
}



Display.defaultProps = {
    weather: {
        icon: '-',
        temp: '-',
        name: '-',
        pressure: '-',
        humidity: '-',
        description: '-'
    }
}

export default Display;
