import React, { useState, useContext } from 'react'
import _ from 'lodash'

import { WeatherContext } from '../contexts/WeatherContext/index'

const Form = () => {
  const [city, setCity] = useState('')
  const { weatherDispatch } = useContext(WeatherContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if (city) {
      weatherDispatch({
        type: 'SET_WEATHER',
        payload: _.startCase(_.toLower(city))
      })
    }
    // axios
    //   .get(
    //     `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
    //   )
    //   .then(({ data }) => {
    //     const arr = data.list.map((item) => {
    //       const dateObj = new Date(item.dt * 1000)
    //       item.day = dateObj.toDateString().slice(0, 3)
    //       item.date = dateObj.toDateString().slice(4, 10)
    //       item.time = dateObj.toLocaleTimeString()

    //       return item
    //     })

    //     console.log(arr)
    //   })
    //   .catch((error) => {
    //     throw error
    //   })
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
