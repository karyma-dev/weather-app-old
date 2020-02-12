import React, { createContext, useState, useReducer } from 'react'
import { weatherReducer } from '../reducers/weatherReducer'

export const WeatherContext = createContext()

const WeatherContextProvider = ({ children }) => {
  const [weather, dispatch] = useReducer(weatherReducer, {
    city: '',
    weather: '',
    description: '',
    iconId: '',
    temperature: '',
    humidity: ''
  })

  return (
    <WeatherContext.Provider value={{ ...weather, dispatch }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
