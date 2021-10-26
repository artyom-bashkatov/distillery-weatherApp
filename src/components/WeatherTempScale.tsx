import React from 'react';
import {connect} from "react-redux";

const WeatherTempScale = (props: { tempScale: string; temp_c: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; temp_f: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    if (props.tempScale === 'celsius') {
        return (
            <h1 className='celsius'>
                {props.temp_c}
            </h1>
        )
    } else {
        return (
            <h1 className='fahrenheit'>
                {props.temp_f}
            </h1>
        )
    }
};

const mapStateToProps = (state: { weatherData: { tempScale: any; temp_c: any; temp_f: any; }; }) => ({
    tempScale: state.weatherData.tempScale,
    temp_c: state.weatherData.temp_c,
    temp_f: state.weatherData.temp_f
})

export default connect(mapStateToProps)(WeatherTempScale);