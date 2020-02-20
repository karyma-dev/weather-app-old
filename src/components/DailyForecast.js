import React, { Fragment, useContext } from 'react'
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
          <div className="daily-group" key={i}>
            <div className="daily-group_day">{day}</div>
            <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
            <div>{temperature}</div>
          </div>
        )
      })
    : null

  return <Fragment>{dailyForecast}</Fragment>
}

export default DailyForecast
