import React, { useContext } from 'react'

import { WeatherContext } from './contexts/WeatherContext'
import Form from './components/Form'

const App = () => {
  const { weather } = useContext(WeatherContext)
  console.log(weather)

  if (weather) {
    return <h1>{weather}</h1>
  } else {
    return <Form />
  }
}

export default App
