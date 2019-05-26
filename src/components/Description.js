import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.p`
    display: inline-block;
    padding: 4rem 0;
    margin-top: -7rem;
`;

const Description = (props) => {
    return (
        <Wrapper>{props.text}</Wrapper>
    )
}

export default Description;