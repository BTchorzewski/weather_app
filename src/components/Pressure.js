import React from 'react';
import Paragraph from './Paragraph';

const Pressure = (props) => {
    return (
        <Paragraph>Pressure: {props.pressure}hPa</Paragraph>
    )
}

export default Pressure;