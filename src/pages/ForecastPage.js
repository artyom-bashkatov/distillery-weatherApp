import React from 'react';
import {Link} from "react-router-dom";
import ForecastPageBackButton from "../components/ForecastPageBackButton";
import ForecastDay from "../components/ForecastDay";
import ForecastToggle from "../components/ForecastToggle";

const ForecastPage = () => {
    return (
        <div className='app app-outlined'>
            <Link to='/SimpleWeather/'>
                <ForecastPageBackButton>Back to home page</ForecastPageBackButton>
            </Link>
            <ForecastDay className='forecast-graph'/>
            <ForecastToggle/>
        </div>
    );
};

export default ForecastPage;