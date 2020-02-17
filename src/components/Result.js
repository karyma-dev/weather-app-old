import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'

import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

const Result = () => {
  const { city, description, temperature, humidity, iconId } = useContext(
    WeatherContext
  )

  const { hourlyWeather } = useContext(HourlyWeatherContext)

  if (hourlyWeather) {
    const groupBy = (key) => (array) =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key]
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
        return objectsByKeyValue
      }, {})

    const groupByDay = groupBy('day')

    const days = groupByDay(hourlyWeather)

    console.log(days)
  }

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
