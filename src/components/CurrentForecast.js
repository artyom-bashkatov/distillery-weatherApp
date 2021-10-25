import React from 'react';
import {connect} from 'react-redux';

import WeatherIcon from './WeatherIcon';
import '../styles/CurrentForecast.css';
import WeatherTempScale from "./WeatherTempScale";
import WeatherCondition from "./WeatherCondition";

const CurrentForecast = (props) => {
    // Conversion from kph to m/s
    const windToMPS = (props.wind * 1000 / 3600).toFixed(1);
    // Conversion from millibars to millimeters of mercury according to the formula
    const pressureToMmOfMercury = (props.pressure * 0.750063755419211).toFixed();

    return (
        <div>
            <WeatherCondition/>
            <div className='weather grid'>
                <WeatherIcon/>
                <div className='weather__temp'>
                    <WeatherTempScale className='weather__temp-scale'/>
                </div>
                <div className='flex weather__properties'>
                    <div className='properties__value'>{windToMPS}<span>m/s</span></div>

                    <div className='properties__value'>{pressureToMmOfMercury}<span>mm Hg</span></div>
                    <div className='properties__value'>{props.humidity}<span>%</span></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    wind: state.weatherData.wind,
    pressure: state.weatherData.pressure,
    humidity: state.weatherData.humidity,
});

export default connect(mapStateToProps)(CurrentForecast);
