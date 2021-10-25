import React, {useEffect} from "react";
import "../styles/CitiesPage.css";
import CitiesPageBackButton from "../components/CitiesPageBackButton";
import CitiesList from "../components/CitiesList";
import TempScaleToggle from "../components/TempScaleToggle";
import {connect} from "react-redux";
import {fetchCityTemp} from "../store/favoriteCitiesReducer/favoriteCitiesReducer";

const CitiesPage = (props) => {
    const fifteenMinutes = 90000;
    const currentDate = Date.now();

    useEffect(() => {
        props.cities.forEach((obj) => {
            if(currentDate - obj.lastUpdated > fifteenMinutes) {
                props.fetchCityTemp(obj.city)
            }
            localStorage.setItem('cities', JSON.stringify(props.cities));
        })
    }, [currentDate, props])

    return (
        <div className='app app-outlined cities-page'>
            <CitiesPageBackButton/>
            <div className='cities-page__list'>
                <h1 className='cities-page-header'>Favorite cities</h1>
                <CitiesList/>
            </div>
            <div className='cities-page__settings'>
                <h1 className='cities-page-header'>Settings</h1>
                <TempScaleToggle/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cities: state.cities.arrOfCities
})

const mapDispatchToProps = (dispatch) => ({
    fetchCityTemp: (city) => {
        dispatch(fetchCityTemp(city));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPage);
