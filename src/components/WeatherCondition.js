import React from 'react';
import '../styles/CurrentForecast.css';
import {connect} from 'react-redux';

const WeatherCondition = (props) => {
    return (
        <div className='condition'>it's {props.condition}</div>
    )
}

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    condition: state.weatherData.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

