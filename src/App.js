import React, { useContext } from 'react'

import { DataContext } from './contexts/DataContext'
import Form from './components/Form'

const App = () => {
  const { data } = useContext(DataContext)
  console.log(data)

  if (data.weather) {
    return <h1>Weather</h1>
  } else {
    return <Form />
  }
}

export default App
