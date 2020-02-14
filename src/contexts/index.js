import React, { createContext } from 'react'

import WeatherContextProvider from './WeatherContext'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider>
      <WeatherContextProvider>{children}</WeatherContextProvider>
    </Context.Provider>
  )
}

export default ContextProvider
