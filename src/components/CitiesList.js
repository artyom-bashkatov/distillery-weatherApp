import React from "react";
import {connect} from "react-redux";
import "../styles/CitiesList.css";
import {useHistory} from "react-router-dom";
import {setCity} from "../store/weatherReducer/weatherReducer";
import CityPageButtonLink from "./CityPageButtonLink";

const CitiesList = (props) => {
    const router = useHistory();
    if (props.cities.length > 0) {
        return (
            <div className='flex cities-list'>
                <div className='blue-line'></div>
                <div className='cities'>
                    {props.cities.map((obj) => (
                        <CityPageButtonLink
                            onClick={() => {
                                router.push(`/SimpleWeather/cities/${obj.city}`);
                                props.updateCityInStore(obj.city);
                            }}
                            className='cities__btn'
                            key={obj.city}
                        >
                            <div>{obj.city}</div>
                            <div>{props.tempScale === "celsius" ? obj.temp_c : obj.temp_f}°</div>
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

const mapStateToProps = (state) => ({
    cities: state.cities.arrOfCities,
    tempScale: state.weatherData.tempScale,
});

const mapDispatchToProps = (dispatch) => ({
    updateCityInStore: (city) => {
        dispatch(setCity(city));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
