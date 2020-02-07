import React, { useState, useContext } from 'react'
import _ from 'lodash'
import axios from 'axios'

import { WeatherContext } from '../contexts/WeatherContext'

const Form = () => {
  const [city, setCity] = useState('')
  const { setWeather } = useContext(WeatherContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},CA&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
        )
        .then(({ data }) => {
          const { weather, main } = data

          const newObj = {
            city: _.startCase(_.toLower(city)),
            weather: _.toLower(weather[0].main),
            description: _.startCase(weather[0].description),
            iconId: weather[0].icon,
            temperature: Math.round(Number(main.temp) - 273.15) + '\xB0 C',
            humidity: main.humidity + '%'
          }

          setWeather(newObj)
        })
        .catch((error) => {
          console.log({ error, message: 'city not found' })
        })
    } else {
      console.log('No City Entered')
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
