import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.h1`
    font-size: 1.8rem;
    
`;

const City = (props) => {
    return (
        <Wrapper>{props.city}</Wrapper>
    )
}


export default City;