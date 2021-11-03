import { render, screen, cleanup } from '@testing-library/react';
import store from "store/store";
import { setWeather, changeTempScale } from "store/weatherReducer/weatherReducer";
import { addCity } from "store/favoriteCitiesReducer/favoriteCitiesReducer";
import "@testing-library/jest-dom";

import WrapperForTest from 'WrapperForTest';
import CitiesList from '../CitiesList';
import { weatherData } from "mockup/weatherData";


store.dispatch(setWeather(weatherData));

beforeEach(() => {
  render(element);
})

afterEach(() => {
  cleanup();
})

const element = <WrapperForTest>
  <CitiesList />
</WrapperForTest>;

const city = {
  city: weatherData.location.name,
  temp_c: weatherData.current.temp_c,
  temp_f: weatherData.current.temp_f,
  lastUpdated: weatherData.current.last_updated
}

describe('CitiesList component render', () => {
  test('CitiesList is render success', () => {
    expect(screen.getByTestId('cities-list-items-empty')).toBeInTheDocument();
    expect(screen.getByText(/You haven't added any city yet!/i)).toBeInTheDocument();
  });

  test('CitiesList test case: add mockup city to favorites and check CitiesList is not empty render', () => {
    store.dispatch(addCity(city));

    expect(screen.getByTestId('cities-list-items')).toBeInTheDocument();
    expect(screen.getByText(/Krasnodar/i)).toBeInTheDocument();

    const { container } = render(element);
    const citiesButtons = container.querySelector('.cities .MuiButton-text');
    expect(citiesButtons).toBeInTheDocument();
  })

  test('CitiesList test case: correct view logic to show temp if celsius or fahrenheit', () => {
    const { container } = render(element);
    const citiesButtons = container.querySelector('.cities .button_temp');
    expect(citiesButtons).toHaveTextContent(14);

    store.dispatch(changeTempScale('fahrenheit'));
    expect(citiesButtons).toHaveTextContent(57.2);
  })
})