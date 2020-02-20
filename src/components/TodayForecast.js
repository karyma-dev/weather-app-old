import React, { Fragment, useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'

const TodayForecast = () => {
  const { description, temperature, humidity, iconId } = useContext(
    WeatherContext
  )

  return (
    <Fragment>
      <div className="today-description">{description}</div>
      <div className="today-group">
        <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
        <span className="today-group_temp">{temperature}</span>
      </div>
    </Fragment>
  )
}

export default TodayForecast
