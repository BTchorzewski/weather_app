import React from 'react';
import Paragraph from './Paragraph';
import styled from 'styled-components';

const Align = styled.div`
    transform: translate(-35%,33%);
`;

const Description = (props) => {
    return (
        <Align>
            <Paragraph>{props.text}</Paragraph>
        </Align>
    )
}

export default Description;