import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
  const [city, setCity] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},CA&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
        )
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log('City No Found')
        })
    } else {
      console.log('No City Entered')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>City: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button>Submit</button>
    </form>
  )
}

export default Form
