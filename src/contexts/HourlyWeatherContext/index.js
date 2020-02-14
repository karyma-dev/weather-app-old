import React, { createContext } from 'react'
import { hourlyWeatherReducer } from './reducer'

import useAsyncReducer from '../../hooks/useAsyncReducer'

export const HourlyWeatherContext = createContext()

const HourlyWeatherContextProvider = (props) => {
  const [hourlyWeather, hourlyWeatherDispatch] = useAsyncReducer(
    hourlyWeatherReducer,
    {}
  )

  return (
    <HourWeatherContext.Provider
      value={{ hourlyWeather, hourlyWeatherDispatch }}
    >
      {props.children}
    </HourWeatherContext.Provider>
  )
}

export default HourlyWeatherContextProvider
