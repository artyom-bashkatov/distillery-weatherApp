import React from 'react';
import {connect} from 'react-redux';

import WeatherIcon from './WeatherIcon';
import '../styles/CurrentForecast.css';
import WeatherTempScale from "./WeatherTempScale";
import WeatherCondition from "./WeatherCondition";

type CurrentForecastType = {
    wind: number,
    pressure: number,
    humidity: number
}

const CurrentForecast:React.FC<CurrentForecastType> = ({ wind, pressure, humidity }: CurrentForecastType) => {
    // Conversion from kph to m/s
    const windToMPS: string = (wind * 1000 / 3600).toFixed(1);
    // Conversion from millibars to millimeters of mercury according to the formula
    const pressureToMmOfMercury: string = (pressure * 0.750063755419211).toFixed();

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
                    <div className='properties__value'>{humidity}<span>%</span></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: { weatherData: { location: any; responseLocation: any; wind: any; pressure: any; humidity: any; }; }) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    wind: state.weatherData.wind,
    pressure: state.weatherData.pressure,
    humidity: state.weatherData.humidity,
});

export default connect(mapStateToProps)(CurrentForecast);
