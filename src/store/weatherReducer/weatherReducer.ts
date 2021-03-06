import store from "../store";
import {
  CHANGE_FORECAST_MODE,
  CHANGE_TEMP_SCALE,
  SET_CITY,
  SET_FORECAST,
  SET_WEATHER,
} from "./actionTypes";
import fetchData from "../../helpers/fetchData";
import { weatherPayloadType, WeatherActionTypes } from "./types";
// next line need when we need to test mockup data
// import { weatherData } from "mockup/weatherData";

export const setCity = (city: string | null) => ({ type: SET_CITY, payload: city });
export const setWeather = (response: weatherPayloadType) => ({
  type: SET_WEATHER,
  payload: response,
});
export const changeTempScale = (response: string | null) => ({
  type: CHANGE_TEMP_SCALE,
  payload: response,
});
export const setForecast = (response: string) => ({
  type: SET_FORECAST,
  payload: response,
});
export const changeForecastMod = (response: string) => ({
  type: CHANGE_FORECAST_MODE,
  payload: response,
});

type initialStateType = {
  location: string;
  responseLocation: string;
  country: string;
  temp_c: string;
  temp_f: string;
  condition: string;
  wind: string;
  pressure: string;
  humidity: string;
  code: string;
  isDay: string;
  tempScale: string;
  hourlyForecast: {
    temp_c: string;
    temp_f: string;
  }[];
  threeDayForecast: {
    date: string;
    temp_c: string;
    temp_f: string;
  }[];
  forecastMod: string;
};

const initialState:initialStateType = {
  location: "",
  responseLocation: "",
  country: "",
  temp_c: "",
  temp_f: "",
  condition: "",
  wind: "",
  pressure: "",
  humidity: "",
  code: "",
  isDay: "",
  tempScale: "celsius",
  hourlyForecast: [],
  threeDayForecast: [],
  forecastMod: "threeDay",
};

export function weatherReducer(
  state = initialState,
  action: WeatherActionTypes
) {
  switch (action.type) {
    case SET_CITY:
      return { ...state, location: action.payload && action.payload.toLowerCase() };
    case SET_WEATHER:
      return {
        ...state,
        responseLocation: action.payload.location.name,
        country: action.payload.location.country,
        temp_c: action.payload.current.temp_c.toFixed(),
        temp_f: action.payload.current.temp_f.toFixed(),
        condition: action.payload.current.condition.text.toLowerCase(),
        wind: action.payload.current.wind_kph,
        pressure: action.payload.current.pressure_mb,
        humidity: action.payload.current.humidity,
        code: action.payload.current.condition.code,
        isDay: action.payload.current.is_day,
        hourlyForecast: action.payload.forecast.forecastday[0].hour.map(
          (hour: { temp_c: any; temp_f: any; }) => {
            return { temp_c: hour.temp_c, temp_f: hour.temp_f };
          }
        ),
        threeDayForecast: action.payload.forecast.forecastday.map((day: { date_epoch: any; day: { avgtemp_c: any; avgtemp_f: any; }; }) => {
          return {
            date: day.date_epoch,
            temp_c: day.day.avgtemp_c,
            temp_f: day.day.avgtemp_f,
          };
        }),
      };
    case CHANGE_TEMP_SCALE:
      return {
        ...state,
        tempScale: action.payload,
      };
    case CHANGE_FORECAST_MODE:
      return {
        ...state,
        forecastMod: action.payload,
      };
    default:
      return state;
  }
}

// This API on the free plan provides a maximum of a three-day forecast
export const fetchWeather =
  (debouncedLocation: string, days = 3) =>
  async () => {
    try {
      const data = await fetchData(debouncedLocation, days);
      console.info('weather data is: ', data)
      store.dispatch(setWeather(data));
      // next line need, when we need to check mockup data
      // store.dispatch(setWeather(weatherData));
      localStorage.setItem("location", data.location.name);
    } catch (e) {
      console.error(e);
    }
  };
