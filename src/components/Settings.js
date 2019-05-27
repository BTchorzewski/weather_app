import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 6rem;
    transform: translateY(-25%);
`;



const Settings = (props) => {

    return (

        <Wrapper onClick={props.changedUnit}>
        {
            props.units ? <p>&deg;C</p> : <p>&deg;F</p>
        }
        
        </Wrapper>
    )    
}

export default Settings;
