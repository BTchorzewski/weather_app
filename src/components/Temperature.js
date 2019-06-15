import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 3rem;
    
`;

const Fahrenheit = (props) =>  {
    return (
        <React.Fragment>
            <h1>{ (Math.floor(props.children * 1.8) + 32) }</h1>
        </React.Fragment>
    )
}

const Celsius = (props) =>  {
    return (
        <React.Fragment>
            <h1>{Math.floor(props.children)}</h1>
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