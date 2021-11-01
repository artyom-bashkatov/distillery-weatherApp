import React from 'react';
import {connect} from "react-redux";

type WeatherTempScaleType = {
    tempScale: string, 
    temp_c: string, 
    temp_f: string,
    className: string
}

const WeatherTempScale:React.FC<WeatherTempScaleType> = ({ tempScale, temp_c, temp_f }) => {
    if (tempScale === 'celsius') {
        return (
            <h1 data-testid="tempCelsius" className='celsius'>
                {temp_c}
            </h1>
        )
    } else {
        return (
            <h1 data-testid="fahrenheit" className='fahrenheit'>
                {temp_f}
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