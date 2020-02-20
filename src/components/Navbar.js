import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/index'

const Navbar = () => {
  const { weather, weatherDispatch } = useContext(WeatherContext)

  const backButton = weather ? (
    <button
      className="header-button"
      onClick={() => weatherDispatch({ type: 'RESET' })}
    >
      Back
    </button>
  ) : null

  return <header className="header">{backButton}</header>
}

export default Navbar
