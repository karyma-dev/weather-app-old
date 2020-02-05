import React, { createContext, useState } from 'react'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const [weather, setWeather] = useState({
    weather: '',
    iconId: '',
    temperature: '',
    humidity: ''
  })

  return (
    <WeatherContext.Provider value={{ ...weather }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
