import React from 'react';
import '../styles/CurrentForecast.css';
import {connect} from 'react-redux';

const WeatherCondition = (props: { condition: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className='condition'>it's {props.condition}</div>
    )
}

const mapStateToProps = (state: { weatherData: { location: any; responseLocation: any; condition: any; }; }) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    condition: state.weatherData.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

