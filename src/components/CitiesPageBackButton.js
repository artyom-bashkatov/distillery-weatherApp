import React from "react";
import IconBackButton from "./UI/IconBackButton";
import {Link} from "react-router-dom";

const CitiesPageBackButton = () => {
    return (
        <Link to='/SimpleWeather' className='cities-page__back-btn'>
            <IconBackButton
                sx={{color: '#2D81FF', '&.MuiIconButton-root:hover': {backgroundColor: 'rgba(45, 129, 255, 0.02)'}}}/>
        </Link>
    );
};

export default CitiesPageBackButton;
