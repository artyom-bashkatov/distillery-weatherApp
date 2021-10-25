import React, {useCallback, useEffect} from "react";
import AutosizeInput from "react-input-autosize";
import {connect} from "react-redux";
import "../styles/CitySearch.css";
import {fetchWeather, setCity} from "../store/weatherReducer/weatherReducer";
import store from "../store/store";
import useDebounce from "../helpers/useDebounce";

type CitySearchPropsType = {
    location: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const CitySearch:React.FC<CitySearchPropsType> = ({ location, onChange }: CitySearchPropsType) => {
    useEffect(() => {
        if (localStorage.getItem('location') && location === '') {
            store.dispatch(setCity(localStorage.getItem('location')));
        }

        return () => {
            localStorage.setItem('location', location);
        };
    }, [location])

    const debouncedLocation = useDebounce(location.trim(), 700);
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
                value={location}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};

const mapStateToProps = (state: { weatherData: { location: string; favoriteCities: string; }; }) => ({
    location: state.weatherData.location,
    favoriteCities: state.weatherData.favoriteCities
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: string | null; }) => void) => ({
    onChange: (event: { target: { value: string | null; }; }) => {
        dispatch(setCity(event.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
