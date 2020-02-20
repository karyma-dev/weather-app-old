import React, { Fragment, useContext } from 'react'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'

const HourlyForecast = () => {
  const { hourlyWeather } = useContext(HourlyWeatherContext)

  const hourlyForecast = hourlyWeather
    ? hourlyWeather.slice(0, 5).map((forecast, i) => {
        console.log(forecast)
        const iconId = forecast.weather[0].icon
        const temperature =
          Math.round(Number(forecast.main.temp) - 273.15) + '\xB0 C'
        return (
          <div key={i}>
            <span>{forecast.time}</span>
            <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
            <span>{temperature}</span>
          </div>
        )
      })
    : null

  return (
    <Fragment>
      <h2>Hourly Forecast</h2>
      {hourlyForecast}
    </Fragment>
  )
}

export default HourlyForecast
