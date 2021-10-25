import React from "react";
import CitySearch from "../components/CitySearch";
import FavoriteCityButton from "../components/FavoriteCityButton";
import ListButton from "../components/UI/ListButton";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import ForecastPageButtonLink from "../components/ForecastPageButtonLink";
import CurrentForecast from "../components/CurrentForecast";

const WeatherToday = (props) => {
    if (props.responseLocation && props.location === props.responseLocation.toLowerCase()) {
        return (
            <div>
                <div className='app'>
                    <FavoriteCityButton/>
                    <Link to='/SimpleWeather/cities' className='app__list-button'>
                        <ListButton/>
                    </Link>
                    <CitySearch/>
                    <CurrentForecast/>
                    <Link to='/SimpleWeather/forecast'>
                        <ForecastPageButtonLink>Show me the forecast</ForecastPageButtonLink>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='app'>
                    <FavoriteCityButton/>
                    <Link to='/SimpleWeather/cities' className='app__list-button'>
                        <ListButton/>
                    </Link>
                    <CitySearch/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
})

export default connect(mapStateToProps)(WeatherToday);
