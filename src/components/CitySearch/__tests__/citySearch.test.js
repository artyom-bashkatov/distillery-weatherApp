import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import WrapperForTest from 'WrapperForTest';
import CitySearch from '../CitySearch';

const element = <WrapperForTest>
  <CitySearch />
</WrapperForTest>;

afterEach(() => {
  cleanup();
})

describe('CitySearch Component', () => {
  test('CitySearch component render', () => {
    render(element);
    expect(screen.getByText('Right now in')).toBeInTheDocument();
  })

  test('CitySearch component onChange event with text value input', () => {
    render(element);
    userEvent.type(screen.getByTestId('searchCityInput'), 'Krasnodar');
    expect(screen.getByText(/Krasnodar/i)).toBeInTheDocument();
  })
})