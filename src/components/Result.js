import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'

import TodayForecast from './TodayForecast'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Result = () => {
  const { city } = useContext(WeatherContext)

  return (
    <div className="result">
      <h2>{city}</h2>
      <div>
        <TodayForecast />
      </div>

      <div className="hourly">
        <h3>Hourly Forecast</h3>
        <div className="hourly-forecast">
          <HourlyForecast />
        </div>
      </div>

      <div className="daily">
        <h3>Daily Forecast</h3>
        <DailyForecast />
      </div>
    </div>
  )
}

export default Result
