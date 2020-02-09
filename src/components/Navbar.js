import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

const Navbar = () => {
  const { weather, setWeather } = useContext(WeatherContext)

  const backButton = weather ? (
    <div className="header-back" onClick={() => setWeather('')}>
      <button className="header-back_button">Back</button>
    </div>
  ) : null

  return (
    <header className="header">
      <div className="header-title">Canadian Weather App</div>
      {backButton}
    </header>
  )
}

export default Navbar
