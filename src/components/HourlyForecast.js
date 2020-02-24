import React, { Fragment, useContext } from 'react'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'

const HourlyForecast = () => {
  const { hourlyWeather } = useContext(HourlyWeatherContext)

  const hourlyForecast = hourlyWeather
    ? hourlyWeather.slice(0, 5).map((forecast, i) => {
        const iconId = forecast.weather[0].icon
        const temperature =
          Math.round(Number(forecast.main.temp) - 273.15) + '\xB0 C'
        return (
          <div key={i}>
            <div className="hourly-forecast_field">{forecast.time}</div>
            <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
            <div className="hourly-forecast_field">{temperature}</div>
          </div>
        )
      })
    : null

  return <Fragment>{hourlyForecast}</Fragment>
}

export default HourlyForecast
