import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import WeatherToday from './pages/WeatherToday';
import {history} from './historyVar';
import CitiesPage from "./pages/CitiesPage";
import CityPage from "./pages/CityPage";
import ForecastPage from "./pages/ForecastPage";


const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/SimpleWeather'>
                    <WeatherToday/>
                </Route>
                <Route exact path='/SimpleWeather/cities'>
                    <CitiesPage/>
                </Route>
                <Route exact path='/SimpleWeather/cities/:city'>
                    <CityPage/>
                </Route>
                <Route exact path='/SimpleWeather/forecast'>
                    <ForecastPage/>
                </Route>
                <Redirect to='/SimpleWeather'/>
            </Switch>
        </Router>
    );
};
export default App;
