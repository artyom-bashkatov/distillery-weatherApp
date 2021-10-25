import React, {useCallback, useEffect} from "react";
import AutosizeInput from "react-input-autosize";
import {connect} from "react-redux";
import "../styles/CitySearch.css";
import {fetchWeather, setCity} from "../store/weatherReducer/weatherReducer";
import store from "../store/store";
import useDebounce from "../helpers/useDebounce";

const CitySearch = (props) => {
    useEffect(() => {
        if (localStorage.getItem('location') && props.location === '') {
            store.dispatch(setCity(localStorage.getItem('location')));
        }

        return () => {
            localStorage.setItem('location', props.location);
        };
    }, [props.location])

    const debouncedLocation = useDebounce(props.location.trim(), 700);
    const weather = fetchWeather(debouncedLocation);

    const memoLoadWeather = useCallback(weather, [weather]);

    useEffect(() => {
        if (debouncedLocation) {
            memoLoadWeather();
        }
    }, [debouncedLocation, memoLoadWeather]);

    return (
        <div className='search'>
            <h1>Right now in</h1>
            <AutosizeInput
                type='text'
                minWidth='70'
                inputStyle={{fontSize: 35, fontWeight: 600, display: 'block'}}
                value={props.location}
                onChange={(e) => props.onChange(e)}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    favoriteCities: state.weatherData.favoriteCities
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => {
        dispatch(setCity(event.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
