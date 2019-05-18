import React from 'react'
const Display = (props) => {
    return (
        <div>
            <p>{props.weather.temp}</p>
            <p>{props.weather.temp_max}</p>
            <p>{props.weather.temp_min}</p>
            <p>{props.weather.pressure}</p>
            <p>{props.weather.humidity}</p>
            <p>{props.weather.sunrise}</p>
            <p>{props.weather.sunset}</p>
            <p>{props.weather.main}</p>
        </div>
    )
}
export default Display;


// weather: {
//     temp,
//     pressure,
//     humidity,
//     temp_max,
//     temp_min,
//     sunrise,
//     sunset,
//     name,
//     main,
//     description
// }