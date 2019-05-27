import React from 'react';
import styled from 'styled-components';
const P = styled.p`
    display: inline-block;

`;

const Description = (props) => {
    return (
        <P>{props.text}</P>
    )
}

export default Description;