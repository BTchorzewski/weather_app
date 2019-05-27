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
    background-image: linear-gradient(to right bottom, rgb(252, 252, 252), rgb(246, 252, 219));
    padding: 4rem;
    border-radius: .3rem;
    width: 32rem;
`; 
const Wrapper2 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10rem;
    width: 100%;
    position: relative;
`;

const Display = (props) => {
    return (
        <Wrapper>
            <Wrapper2>
                <Icon icon={props.weather.icon}/>
                <Temperature temp={props.weather.temp} units={props.units}/>
                <Settings changedUnit={props.changedUnit} units={props.units}></Settings>
            </Wrapper2>
            <City city={props.weather.name}></City>
            <Pressure pressure={props.weather.pressure}/>
            <Humidity humidity={props.weather.humidity}/>
            <Description text={props.weather.description}></Description>
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
