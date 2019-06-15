import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    
    height: 6rem;
    margin-right: 2rem;
   
`;

const Icon = (props) => {
    return (
        props.icon ? <Image src={`http://openweathermap.org/img/w//${props.icon}.png`} alt='icon of weather'/> : <p>-</p>
    )
}

export default Icon;