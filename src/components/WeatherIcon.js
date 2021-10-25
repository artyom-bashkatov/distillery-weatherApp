import React from 'react';
import {connect} from 'react-redux';
import "../styles/CurrentForecast.css";

const WeatherIcon = (props) => {
    let timeOfDay = 'day';
    if (!props.isDay) {
        timeOfDay = 'night';
    }

    const weatherSrc = `${process.env.PUBLIC_URL}/assets/icons/${timeOfDay}/${props.code}.svg`;

    return (
        <div className='weather__icon'>
            <object data={weatherSrc} className='weather__icon' type='image/svg+xml'
                    aria-label='icon of weather'/>
        </div>
    )

}

const mapStateToProps = (state) => ({
    code: state.weatherData.code,
    isDay: state.weatherData.isDay
})
export default connect(mapStateToProps)(WeatherIcon);