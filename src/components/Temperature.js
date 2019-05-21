import React from 'react';
import styled, { keyframes } from 'styled-components';

const show = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    font-size: 5rem;
    letter-spacing: .1rem;

    & > h1 {
        animation: ${show} 2s;
    }

`;

const Fahrenheit = (props) =>  {
    return (
        <React.Fragment>
            <h1>{ (Math.floor(props.children * 1.8) + 32) }&deg;F</h1>
        </React.Fragment>
    )
}

const Celsius = (props) =>  {
    return (
        <React.Fragment>
            <h1>{Math.floor(props.children)} &deg;C</h1>
        </React.Fragment>
    )
}


const Temperature = (props) => {
    return (
        <Wrapper>
            {
                props.units ? <Fahrenheit>{props.temp}</Fahrenheit> : <Celsius>{props.temp}</Celsius>
            }
            
            
        </Wrapper>
    )
}


export default Temperature;