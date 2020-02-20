import React, { Fragment, useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'

const TodayForecast = () => {
  const { description, temperature, humidity, iconId } = useContext(
    WeatherContext
  )

  return (
    <Fragment>
      <div>
        <img src={`http://openweathermap.org/img/wn/${iconId}.png`} />
        <span>{description}</span>
      </div>
      <div>
        <span>{temperature}</span>
      </div>
      <div>
        <span>Humidity: {humidity}</span>
      </div>
    </Fragment>
  )
}

export default TodayForecast
