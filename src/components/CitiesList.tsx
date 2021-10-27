import React from "react";
import {connect} from "react-redux";
import "../styles/CitiesList.css";
import {useHistory} from "react-router-dom";
import {setCity} from "../store/weatherReducer/weatherReducer";
import CityPageButtonLink from "./CityPageButtonLink";

type CitiesListType = {
    cities: {
        city: string,
        temp_f: string,
        temp_c: string,
    }[],
    tempScale: string,
    updateCityInStore: (city: string) => void
}

const CitiesList:React.FC<CitiesListType> = ({ cities, tempScale, updateCityInStore}: CitiesListType) => {
    const router = useHistory();
    if (cities.length > 0) {
        return (
            <div className='flex cities-list'>
                <div className='blue-line'></div>
                <div className='cities'>
                    {cities.map((obj) => (
                        <CityPageButtonLink
                            onClick={() => {
                                router.push(`/SimpleWeather/cities/${obj.city}`);
                                updateCityInStore(obj.city);
                            }}
                            className='cities__btn'
                            key={obj.city}
                        >
                            <div>{obj.city}</div>
                            <div>{tempScale === "celsius" ? obj.temp_c : obj.temp_f}°</div>
                        </CityPageButtonLink>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex cities-list'>
                <div className='blue-line'></div>
                <div className='cities-empty'>
                    <p>Oops!</p>
                    <p>You haven't added any city yet!</p>
                </div>
                <div className='blue-line'></div>
            </div>
        );
    }
};

const mapStateToProps = (state: { cities: { arrOfCities: any; }; weatherData: { tempScale: any; }; }) => ({
    cities: state.cities.arrOfCities,
    tempScale: state.weatherData.tempScale,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: string | null; }) => void) => ({
    updateCityInStore: (city: string) => {
        dispatch(setCity(city));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
