import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

const Result = () => {
  const { city, description, temperature, humidity } = useContext(
    WeatherContext
  )

  return (
    <div>
      <h2>{city}</h2>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>{temperature}</span>
      </div>
      <div>
        <span>{humidity}</span>
      </div>
    </div>
  )
}

export default Result
