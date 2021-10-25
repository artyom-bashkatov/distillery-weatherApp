import React, {useState} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {changeForecastMod} from "../store/weatherReducer/weatherReducer";
import {connect} from "react-redux";
import '../styles/ForecastToggle.css'

const ForecastToggle = (props) => {
    if (!localStorage.getItem('forecastScale')) {
        localStorage.setItem('forecastScale', 'threeDay');
    }
    const [value, setValue] = useState(localStorage.getItem('forecastScale'));
    return (
        <div className='forecast-toggle-wrapper'>
            <ToggleButtonGroup
                color='secondary'
                value={value}
                exclusive
                sx={{height: '20px'}}
                fullWidth={true}
                className='forecast-toggle'
                onChange={() => {
                    if (value === 'threeDay') {
                        setValue('hourly')
                        props.changeForecastMod('hourly');
                        localStorage.setItem('forecastScale', 'hourly')
                    } else {
                        setValue('threeDay')
                        props.changeForecastMod('threeDay')
                        localStorage.setItem('forecastScale', 'threeDay')
                    }
                }}
            >
                <ToggleButton
                    value='hourly'
                    sx={{
                        '&.MuiToggleButton-root': {
                            borderRadius: '20px',
                            backgroundColor: 'transparent',
                            borderColor: '#F9FBFF',
                            color: '#2d81ff',
                            textTransform: 'capitalize',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#6BA6FF',
                            borderColor: '#6BA6FF',
                            color: '#ffffff',
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: '#5096ff',
                            color: '#ffffff',
                        },
                    }}
                >
                    Hourly
                </ToggleButton>
                <ToggleButton
                    value='threeDay'
                    sx={{
                        '&.MuiToggleButton-root': {
                            borderRadius: '20px',
                            backgroundColor: 'transparent',
                            borderColor: '#F9FBFF',
                            color: '#2d81ff',
                            textTransform: 'capitalize',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#6BA6FF',
                            borderColor: '#6BA6FF',
                            color: '#ffffff',
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: '#5096ff',
                            color: '#ffffff',
                        },
                    }}
                >
                    Three-day
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

const mapStateToProps = (state) => ({
    forecastMod: state.weatherData.forecastMod,
});

const mapDispatchToProps = (dispatch) => ({
    changeForecastMod: (value) => {
        dispatch(changeForecastMod(value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastToggle);