import React, { Fragment, useContext } from 'react'
import { WeatherContext } from './contexts/WeatherContext'

import Navbar from './components/Navbar'
import Form from './components/Form'
import Result from './components/Result'

const App = () => {
  const { weather } = useContext(WeatherContext)
  const Body = weather ? <Result /> : <Form />

  return (
    <Fragment>
      <Navbar />
      {Body}
    </Fragment>
  )
}

export default App
