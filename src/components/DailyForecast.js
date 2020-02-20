import React, { Fragment, useContext, useEffect } from 'react'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'

const DailyForecast = () => {
  const { hourlyWeather } = useContext(HourlyWeatherContext)

  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key]
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})

  const weeklyWeather = hourlyWeather ? groupBy('day')(hourlyWeather) : {}

  const dailyForecast = hourlyWeather
    ? Object.keys(weeklyWeather).map((day, i) => {
        const iconId = weeklyWeather[day][0].weather[0].icon
        const temperature =
          Math.round(Number(weeklyWeather[day][0].main.temp) - 273.15) +
          '\xB0 C'

        return (
          <div key={i}>
            <span>{day}</span>
            <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
            <span>{temperature}</span>
          </div>
        )
      })
    : null

  return (
    <Fragment>
      <h2>Daily Forecast</h2>
      {dailyForecast}
    </Fragment>
  )
}

export default DailyForecast
