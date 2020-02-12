import React, { createContext } from 'react'

import WeatherContextProvider from './WeatherContext'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <WeatherContextProvider>
      <Context.Provider>{children}</Context.Provider>
    </WeatherContextProvider>
  )
}

export default ContextProvider
