import React, { Fragment, useContext } from 'react'
import { WeatherContext } from './contexts/WeatherContext'

import Navbar from './components/Navbar'
import Form from './components/Form'
import Result from './components/Result'

import homeBackground from './img/Home.jpeg'
import backgroundImage from './img/backgroundImage'

const App = () => {
  const { weather } = useContext(WeatherContext)
  const body = weather ? <Result /> : <Form />

  const backgroundStyle = weather
    ? { backgroundImage: `url(${backgroundImage[weather]})` }
    : { backgroundImage: `url(${homeBackground})` }

  return (
    <Fragment>
      <div className="background" style={backgroundStyle}></div>
      <Navbar />
      <div className="content">
        <main className="main">{body}</main>
      </div>
    </Fragment>
  )
}

export default App
