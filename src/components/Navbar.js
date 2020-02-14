import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

const Navbar = () => {
  const { weather, dispatch } = useContext(WeatherContext)

  const backButton = weather ? (
    <div className="header-back" onClick={() => dispatch({ type: 'RESET' })}>
      <button className="header-back_button">Back</button>
    </div>
  ) : null

  return (
    <header className="header">
      <div className="header-title" onClick={() => setWeather('')}>
        Canadian Cities Weather App
      </div>
      {backButton}
    </header>
  )
}

export default Navbar
