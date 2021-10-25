import {
  CHANGE_FORECAST_MODE,
  CHANGE_TEMP_SCALE,
  SET_CITY,
  SET_FORECAST,
  SET_WEATHER,
} from "./actionTypes";

type forecastType = {
  hour: {
    temp_c: string,
    temp_f: string
  }[],
  date_epoch: string,
  day: {
    avgtemp_c: string,
    avgtemp_f: string
  }
}

export type weatherPayloadType = {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      code: string;
    };
    wind_kph: string;
    pressure_mb: string;
    humidity: string;
    is_day: boolean;
  };
  location: {
    name: string;
    country: string;
  };
  forecast: {
    forecastday: forecastType[]
  };
};

interface ISetCityAction {
  type: typeof SET_CITY;
  payload: string;
}

interface IChangeTempScaleAction {
  type: typeof CHANGE_TEMP_SCALE;
  payload: string;
}

interface IChangeForecastAction {
  type: typeof CHANGE_FORECAST_MODE;
  payload: string;
}

interface ISetWeatherAction {
  type: typeof SET_WEATHER;
  payload: weatherPayloadType;
}

export type WeatherActionTypes =
  | ISetCityAction
  | IChangeTempScaleAction
  | IChangeForecastAction
  | ISetWeatherAction;
