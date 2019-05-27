import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    height: 12rem;
    margin-right: 2rem;
    position: absolute;
    top: -20%;
    left: -5%;
`;

const Icon = (props) => {
    return (
        <Image src={`http://openweathermap.org/img/w//${props.icon}.png`} alt='icon of weather'/>
    )
}

export default Icon;