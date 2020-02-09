import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import WeatherContextProvider from './contexts/WeatherContext'

const node = document.getElementById('root')

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  node
)
