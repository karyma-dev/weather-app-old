import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'

import TodayForecast from './TodayForecast'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Result = () => {
  const { city } = useContext(WeatherContext)

  return (
    <div>
      <h2>{city}</h2>
      <div>
        <TodayForecast />
      </div>

      <div>
        <HourlyForecast />
      </div>

      <div>
        <DailyForecast />
      </div>
    </div>
  )
}

export default Result
