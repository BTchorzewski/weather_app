import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    position: absolute;
    top: .5rem;
    right: .5rem;
    padding: .3rem .5rem;
    background-color: #fff;
    color: #000;
    border-radius: 10rem;
    text-align: center;
`;



const Settings = (props) => {

    return (

        <Wrapper onClick={props.changedUnit}>
        {
            props.units ? <p>To Celsius</p> : <p>To Fahrenheit</p>
        }
        
        </Wrapper>
    )    
}

export default Settings;
