import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.p`
    display: inline-block;
    padding: 2rem 0;
    margin-top: -3rem;
    font-size: 1.8rem;

`;

const Description = (props) => {
    return (
        <Wrapper>{props.text}</Wrapper>
    )
}

export default Description;