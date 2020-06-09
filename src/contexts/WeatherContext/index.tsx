import React, { createContext } from 'react'
import { weatherReducer } from './reducer'

import useAsyncReducer from '../../hooks/useAsyncReducer'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
    const [weather, weatherDispatch] = useAsyncReducer(weatherReducer, {})
    return <WeatherContext.Provider value={{ ...weather, weatherDispatch }}>{props.children}</WeatherContext.Provider>
}

export default WeatherContextProvider
