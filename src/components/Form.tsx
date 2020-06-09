import React, { useState, useContext } from 'react'
import _ from 'lodash'

import { WeatherContext } from '../contexts/WeatherContext/index.tsx'
import { HourlyWeatherContext } from '../contexts/HourlyWeatherContext/index'
import searchIcon from '../img/search.svg'

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
        placeholder="City Name"
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = 'City Name')}
      />

      <button className="form-submit">
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  )
}

export default Form
