import React, { createContext } from 'react'
import { weatherReducer } from './reducers/weatherReducer'

import useAsyncReducer from '../hooks/useAsyncReducer'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
  const [weather, dispatch] = useAsyncReducer(weatherReducer, {})
  return (
    <WeatherContext.Provider value={{ ...weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
