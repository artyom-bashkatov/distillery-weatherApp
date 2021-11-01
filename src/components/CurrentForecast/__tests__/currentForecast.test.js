import store from "store/store";
import { setWeather, changeTempScale } from "store/weatherReducer/weatherReducer";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import WrapperForTest from 'WrapperForTest';
import CurrentForecast from "../CurrentForecast";
import { weatherData } from "mockup/weatherData";
import { setTokenSourceMapRange } from "typescript";

const element = <WrapperForTest>
  <CurrentForecast />
</WrapperForTest>;

describe('CurrentForecast Component render', () => {
  test('CurrentForecast render test component case', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('windToMPS')).toBeInTheDocument();
    expect(screen.getByTestId('pressureToMmOfMercury')).toBeInTheDocument();
    expect(screen.getByTestId('humidity')).toBeInTheDocument();
  })

  test('CurrentForecast windToMPS case', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('windToMPS')).toHaveTextContent('4.2');
  })

  test('CurrentForecast pressureToMmOfMercury case', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('pressureToMmOfMercury')).toHaveTextContent('770');
  })

  test('CurrentForecast humidity case', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('humidity')).toHaveTextContent('55');
  })

  test('CurrentForecast temp in celsius', () => {
      render(element);
      store.dispatch(setWeather(weatherData));
      expect(screen.getAllByTestId('tempCelsius')[0]).toBeInTheDocument();
      expect(screen.getAllByTestId('tempCelsius')[0]).toHaveTextContent('14');
  });

  test('CurrentForecast temp in fahrenheit', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    store.dispatch(changeTempScale('fahrenheit'));
    expect(screen.getAllByTestId('fahrenheit')[0]).toBeInTheDocument();
    expect(screen.getAllByTestId('fahrenheit')[0]).toHaveTextContent('57');
  });
});
