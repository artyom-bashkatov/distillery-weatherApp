import React, {useEffect} from 'react';
import FavoriteCityButton from "../components/FavoriteCityButton";
import {Link, useHistory} from "react-router-dom";
import ListButton from "../components/UI/ListButton";
import CitySearch from "../components/CitySearch";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import ForecastPageButtonLink from "../components/ForecastPageButtonLink";
import CurrentForecast from "../components/CurrentForecast";

const CityPage = (props) => {
    const params = useParams();
    const router = useHistory();

    // Redirect to the home page if you start looking for another city
    useEffect(() => {
        if (props.location !== params.city) {
            router.push('/SimpleWeather');
        }
    }, [params.city, props.location, router])

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
    );
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location
})

export default connect(mapStateToProps)(CityPage);