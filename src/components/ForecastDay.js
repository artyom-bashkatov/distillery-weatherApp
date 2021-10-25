import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from "react-redux";
import moment from "moment";
import '../styles/ForecastDay.css'

const ForecastDay = (props) => {

    const hourly = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [
            {
                label: 'Hourly forecast',
                data: props.tempScale === 'celsius' ? props.hourlyForecast.map((hour) => hour.temp_c) : props.hourlyForecast.map((hour) => hour.temp_f),
                backgroundColor: '#2D81FF',
                borderColor: '#2D81FF',
                color: '#F9FBFF',
                tension: 0.2,
                pointRadius: 0,
                fill: {
                    target: 'origin',
                    above: 'rgba(249, 251, 255, 0.5)',   // Area will be red above the origin
                    below: '#F9FBFF'    // And blue below the origin
                }

            },
        ],
    };

    const threeDay = {
        labels: props.threeDay.map((day) => moment(day.date, 'X').format('dddd')),
        datasets: [
            {
                label: 'three-days forecast',
                data: props.tempScale === 'celsius' ? props.threeDay.map((day) => day.temp_c) : props.threeDay.map((day) => day.temp_f),
                backgroundColor: '#2D81FF',
                borderColor: '#2D81FF',
                color: '#F9FBFF',
                tension: 0.2,
                pointRadius: 0,
                fill: {
                    target: 'origin',
                    above: 'rgba(249, 251, 255, 0.5)',   // Area will be red above the origin
                    below: '#F9FBFF'    // And blue below the origin
                }

            },
        ],
    }

    const options = {
        chart: {
            default: {
                borderColor: '#fff'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#2D81FF',
                    callback: function(value, index, values) {
                        return value + '°';
                    }
                },
                title: {
                   display: true,
                    text: 'Temperature',
                    color: '#2D81FF',
                    font: 'Roboto',
                },
            },
            x: {
                grid: {
                    display: false,
                    borderColor: '#2D81FF'
                },
                ticks: {
                    color: '#2D81FF'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        color: '#F9FBFF',
                        family: "'Roboto', sans-serif"
                    }
                }
            }
        }
    };


    return (
        <div className='forecast-graph'>
            <Line
                width={580}
                height={280}
                data={props.forecastMod === 'threeDay' ? threeDay : hourly}
                options={options}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    forecastMod: state.weatherData.forecastMod,
    tempScale: state.weatherData.tempScale,
    hourlyForecast: state.weatherData.hourlyForecast,
    threeDay: state.weatherData.threeDayForecast,
})

export default connect(mapStateToProps)(ForecastDay);