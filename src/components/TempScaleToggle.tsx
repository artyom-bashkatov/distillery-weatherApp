import React, {useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {connect} from "react-redux";
import {changeTempScale} from "../store/weatherReducer/weatherReducer";

type TempScaleToggleType = {
    changeTempScale: (arg: string) => void
}

const TempScaleToggle:React.FC<TempScaleToggleType> = ({ changeTempScale }: TempScaleToggleType) => {
    if (!localStorage.getItem('tempScale')) {
        localStorage.setItem('tempScale', 'celsius');
    }
    const [value, setValue] = useState(localStorage.getItem('tempScale'));
    return (
            <ToggleButtonGroup
                color='secondary'
                value={value}
                exclusive
                fullWidth={true}
                sx={{height: '20px'}}
                onChange={() => {
                    if (value === 'celsius') {
                        setValue('fahrenheit')
                        changeTempScale('fahrenheit');
                        localStorage.setItem('tempScale', 'fahrenheit')
                    } else {
                        setValue('celsius')
                        changeTempScale('celsius')
                        localStorage.setItem('tempScale', 'celsius')
                    }
                }}
            >
                <ToggleButton
                    value='fahrenheit'
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
                    Fahrenheit
                </ToggleButton>
                <ToggleButton
                    value='celsius'
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
                    Celsius
                </ToggleButton>
            </ToggleButtonGroup>
    );
};

const mapStateToProps = (state: { weatherData: { tempScale: any; }; }) => ({
    tempScale: state.weatherData.tempScale,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: string; }) => void) => ({
    changeTempScale: (value: string) => {
        dispatch(changeTempScale(value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TempScaleToggle);
