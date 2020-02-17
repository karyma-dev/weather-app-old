import React, { useState, useContext } from 'react'
import _ from 'lodash'

import { WeatherContext } from '../contexts/WeatherContext/index'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'

const Form = () => {
  const [city, setCity] = useState('')
  const { weatherDispatch } = useContext(WeatherContext)
  const { hourlyWeatherDispatch } = useContext(HourlyWeatherContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if (city) {
      weatherDispatch({
        type: 'GET_WEATHER',
        payload: _.startCase(_.toLower(city))
      })

      hourlyWeatherDispatch({
        type: 'GET_WEATHER',
        payload: _.startCase(_.toLower(city))
      })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form-input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />

      <button className="form-submit">Submit</button>
    </form>
  )
}

export default Form
