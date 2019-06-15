import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 3rem;
    transform: translate(1rem,-1.5rem);
`;



const Settings = (props) => {

    return (

        <Wrapper onClick={props.changedUnit}>
        {
            props.units ? <p>&deg;F |&deg;C</p> : <p>&deg;C |&deg;F</p>
        }
        
        </Wrapper>
    )    
}

export default Settings;
