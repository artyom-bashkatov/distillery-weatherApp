import store from "store/store";
import { render, screen, cleanup } from "@testing-library/react";
import { setWeather } from "store/weatherReducer/weatherReducer";
import "@testing-library/jest-dom";

import WrapperForTest from 'WrapperForTest';
import FavoriteCityButton from "../FavoriteCityButton";
import { weatherData } from "mockup/weatherData";

const element = <WrapperForTest>
  <FavoriteCityButton />
</WrapperForTest>;

afterEach(() => {
  cleanup();
})

describe('FavoriteCityButton render', () => {
  test('FavoriteCityButton test component render', () => {
    render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('favoriteButton')).toBeInTheDocument();
  });
})