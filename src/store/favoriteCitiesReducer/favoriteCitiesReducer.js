import store from "../store";
import {ADD_TO_FAVORITES, GET_CITIES, REMOVE_FROM_FAVORITES, UPDATE_TEMP} from "./actionTypes";
import fetchData from "../../helpers/fetchData";

export const addCity = (city) => ({type: ADD_TO_FAVORITES, payload: city})
export const removeCity = (city) => ({type: REMOVE_FROM_FAVORITES, payload: city})
export const getCitiesFromLocaleStorage = (cities) => ({type: GET_CITIES, payload: cities})
export const updateTemp = (data) => ({type: UPDATE_TEMP, payload: data})

export const citiesState = {
    arrOfCities: [],
};

export function favoriteCitiesReducer(state = citiesState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                arrOfCities: [...state.arrOfCities, {
                    city: action.payload.city,
                    temp_c: action.payload.temp_c,
                    temp_f: action.payload.temp_f,
                    lastUpdated: action.payload.lastUpdated,
                }]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                arrOfCities: state.arrOfCities.filter(
                    (obj) => obj.city !== action.payload
                ),
            };
        case GET_CITIES:
            return {
                ...state,
                arrOfCities: action.payload,
            };
        case UPDATE_TEMP:
            return {
                ...state,
                arrOfCities: state.arrOfCities.map((obj) => obj.city === action.payload.location.name.toLowerCase() ? {
                    ...obj, temp_c: action.payload.current.temp_c.toFixed(),
                    temp_f: action.payload.current.temp_f.toFixed(),
                    lastUpdated: Date.now(),
                } : obj)
            }
        default:
            return state;
    }
}

export const addToFavorites = (city) => (dispatch) => {
    store.dispatch(addCity(city));
};
export const removeFromFavorites = (city) => (dispatch) => {
    store.dispatch(removeCity(city));
};

export const fetchCityTemp = (city) => async (dispatch) => {
    try {
        const data = await (fetchData(city));
        store.dispatch(updateTemp(data));
    } catch (e) {
        console.error(e);
    }
}