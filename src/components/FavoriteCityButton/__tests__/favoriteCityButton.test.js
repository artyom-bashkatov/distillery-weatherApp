import store from "store/store";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    const { container } = render(element);
    store.dispatch(setWeather(weatherData));
    expect(screen.getByTestId('favoriteButton')).toBeInTheDocument();

    const checkbox = container.querySelector('[data-testid="favoriteButton"] input[type=checkbox]:not(:checked)');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(container.querySelector('[data-testid="favoriteButton"] .MuiCheckbox-root'))
    
    const checkBoxChecked = container.querySelector('[data-testid="favoriteButton"] input[type=checkbox]:checked');
    expect(checkBoxChecked).toBeInTheDocument();
  });
})