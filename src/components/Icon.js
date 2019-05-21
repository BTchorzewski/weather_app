import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
     
    & > img {
        width: 18rem;
    }
    
`;

const Icon = (props) => {
    return (
        <Wrapper>
            <img src={`http://openweathermap.org/img/w//${props.icon}.png`} alt='icon of weather'/>
        </Wrapper>
        
    )
}

export default Icon;