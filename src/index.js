import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import WeatherContextProvider from './contexts/WeatherContext'

const node = document.getElementById('app')

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  node
)
