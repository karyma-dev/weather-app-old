import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index.tsx'

import TodayForecast from './TodayForecast'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Result = () => {
    const { city } = useContext(WeatherContext)

    return (
        <div className="result">
            <h2>{city}</h2>
            <div className="today">
                <TodayForecast />
            </div>

            <div className="hourly">
                <h3 className="hourly-title">Hourly Forecast</h3>
                <div className="hourly-forecast">
                    <HourlyForecast />
                </div>
            </div>

            <div className="daily">
                <h3 className="daily-title">Daily Forecast</h3>
                <DailyForecast />
            </div>
        </div>
    )
}

export default Result
