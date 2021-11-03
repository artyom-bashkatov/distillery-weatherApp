import React, {useEffect} from "react";
import "../styles/CitiesPage.css";
import CitiesPageBackButton from "../components/CitiesPageBackButton";
import CitiesList from "components/CitiesList/CitiesList";
import TempScaleToggle from "../components/TempScaleToggle";
import {connect} from "react-redux";
import {fetchCityTemp} from "../store/favoriteCitiesReducer/favoriteCitiesReducer";

type CitiesPageType = {
    cities: [],
    fetchCityTemp: (arg: string) => void
}

const CitiesPage:React.FC<CitiesPageType> = ({ fetchCityTemp, cities }: CitiesPageType) => {
    const fifteenMinutes = 90000;
    const currentDate = Date.now();

    useEffect(() => {
        cities.forEach((obj: { lastUpdated: number; city: any; }) => {
            if(currentDate - obj.lastUpdated > fifteenMinutes) {
                fetchCityTemp(obj.city)
            }
            localStorage.setItem('cities', JSON.stringify(cities));
        })
    }, [cities, currentDate, fetchCityTemp])

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

const mapStateToProps = (state: { cities: { arrOfCities: any; }; }) => ({
    cities: state.cities.arrOfCities
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchCityTemp: (city: { city: string; temp_c: string; temp_f: string; lastUpdated: number; } | string) => {
        dispatch(fetchCityTemp(city));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPage);
