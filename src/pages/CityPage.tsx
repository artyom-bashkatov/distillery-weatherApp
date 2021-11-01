import React, {useEffect} from 'react';
import FavoriteCityButton from "components/FavoriteCityButton/FavoriteCityButton";
import {Link, useHistory} from "react-router-dom";
import ListButton from "../components/UI/ListButton";
import CitySearch from "../components/CitySearch/CitySearch";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import ForecastPageButtonLink from "../components/ForecastPageButtonLink";
import CurrentForecast from "components/CurrentForecast/CurrentForecast";

type paramsType = {
    city: string
}

type CityPagePropsType = {
    location: string
}

const CityPage:React.FC<CityPagePropsType> = ({ location }: CityPagePropsType) => {
    const params = useParams<paramsType>();
    const router = useHistory();

    // Redirect to the home page if you start looking for another city
    useEffect(() => {
        if (location !== params.city) {
            router.push('/SimpleWeather');
        }
    }, [params.city, location, router])

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

const mapStateToProps = (state: { weatherData: { location: string; }; }) => ({
    location: state.weatherData.location
})

export default connect(mapStateToProps)(CityPage);