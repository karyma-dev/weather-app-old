import React, { Fragment, useContext } from 'react'
import { WeatherContext } from './contexts/WeatherContext/index'

import Navbar from './components/Navbar'
import Form from './components/Form'
import Result from './components/Result'

import homeBackground from './img/home.jpg'
import backgroundImage from './img/backgroundImage'

const App = () => {
  const { weather } = useContext(WeatherContext)
  const body = weather ? <Result /> : <Form />

  const backgroundStyle = weather
    ? { backgroundImage: `url(${backgroundImage[weather]})`, opacity: '0.8' }
    : { backgroundImage: `url(${homeBackground})` }

  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <div className="background" style={backgroundStyle}></div>
        <main className="main">{body}</main>
      </div>
    </Fragment>
  )
}

export default App
