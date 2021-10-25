import React, {useEffect, useState} from "react";
import FavoriteButton from "./UI/FavoriteButton";
import {connect} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../store/favoriteCitiesReducer/favoriteCitiesReducer";

const FavoriteCityButton = (props) => {
    const [isFavorite, setFavorite] = useState(props.cities.find(obj => obj.city === props.location))
    const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {
        setFavorite(props.cities.find(obj => obj.city === props.location));
    }, [props.cities, props.location]);

    useEffect(() => {
        if (
            props.location &&
            props.location === props.responseLocation.toLowerCase()
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [props.location, props.responseLocation]);

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(props.cities));
    }, [props.cities]);

    return (
        <FavoriteButton
            onClick={() => {
                if (!isFavorite) {
                    props.addToFavorites({
                        city: props.location,
                        temp_c: props.temp_c,
                        temp_f: props.temp_f,
                        lastUpdated: Date.now()
                    });
                    setFavorite(!isFavorite);
                } else {
                    props.removeFromFavorites(props.location);
                    setFavorite(!isFavorite);
                }
            }}
            disabled={isDisabled}
            checked={!!isFavorite}
        />
    );
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    temp_c: state.weatherData.temp_c,
    temp_f: state.weatherData.temp_f,
    cities: state.cities.arrOfCities,
});

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (objOfCity) => {
        dispatch(addToFavorites(objOfCity));
    },
    removeFromFavorites: (city) => {
        dispatch(removeFromFavorites(city));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCityButton);
