import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/store'
import App from './App';
import './index.css';
import './styles/adaptiveApp.css'
import {getCitiesFromLocaleStorage} from "./store/favoriteCitiesReducer/favoriteCitiesReducer";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {BrowserRouter} from "react-router-dom";
import {changeTempScale} from "./store/weatherReducer/weatherReducer";

if (!localStorage.getItem('cities')) {
    localStorage.setItem('cities', '[]');
} else {
    const citiesStr = localStorage.getItem('cities')
    const cities = JSON.parse(citiesStr);
    store.dispatch(getCitiesFromLocaleStorage(cities));
}

if (localStorage.getItem('tempScale')) {
    store.dispatch(changeTempScale(localStorage.getItem('tempScale')))
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            darker: '#ffffff'
        },
        secondary: {
            main: '#2d81ff',
            darker: '#2d81ff'
        }
    }
});


const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename='/SimpleWeather'>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    rootElement
)
