import React, { Fragment, useContext } from 'react'
import { WeatherContext } from './contexts/WeatherContext'

import Navbar from './components/Navbar'
import Form from './components/Form'
import Result from './components/Result'

import {
  Home,
  Rain,
  Drizzle,
  Clear,
  Clouds,
  Atmosphere,
  Snow,
  Thunderstorm
} from './img'

const App = () => {
  const { weather } = useContext(WeatherContext)
  const body = weather ? <Result /> : <Form />

  const backgroundStyle = weather
    ? { backgroundImage: `url(${weather})` }
    : { backgroundImage: `url(${Home})` }

  return (
    <div className="app" style={backgroundStyle}>
      <Navbar />
      <main className="main">{body}</main>
    </div>
  )
}

export default App
