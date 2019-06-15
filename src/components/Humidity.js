import React from 'react'
import Paragraph from './Paragraph';

const Humidity = (props) => {
    return (
        <Paragraph>Humidity: {props.humidity}%</Paragraph>
    )
}

export default Humidity;
