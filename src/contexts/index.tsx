import React, { createContext } from 'react'
import WeatherContextProvider from './WeatherContext/index'
import HourlyWeatherContextProvider from './HourlyWeatherContext/index'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider>
      <HourlyWeatherContextProvider>
        <WeatherContextProvider>{children}</WeatherContextProvider>
      </HourlyWeatherContextProvider>
    </Context.Provider>
  )
}

export default ContextProvider
