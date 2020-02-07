import React, { Fragment, useContext } from 'react'
import { WeatherContext } from './contexts/WeatherContext'

import Navbar from './components/Navbar'
import Form from './components/Form'
import Result from './components/Result'

const App = () => {
  const { weather } = useContext(WeatherContext)
  const body = weather ? <Result /> : <Form />

  return (
    <Fragment>
      <Navbar />
      <main className="main">{body}</main>
    </Fragment>
  )
}

export default App
