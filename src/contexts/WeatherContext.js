import React, { createContext, useState } from 'react'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const [weather, setWeather] = useState({
    city: '',
    weather: '',
    description: '',
    iconId: '',
    temperature: '',
    humidity: ''
  })

  return (
    <WeatherContext.Provider value={{ ...weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
