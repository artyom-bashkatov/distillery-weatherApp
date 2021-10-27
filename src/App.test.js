import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import WrapperForTest from 'WrapperForTest';
import App from './App';

beforeEach(() => {
  cleanup()
})

const AppElement = <WrapperForTest><App/></WrapperForTest>;

describe('App component', () => {
  test('App render test case', () => {
    render(AppElement);
    expect(screen.getByText('Right now in')).toBeInTheDocument();
  })

  test('App has input case', () => {
    render(AppElement)
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  })
})