import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import WeatherProvider from './contexts/WeatherContext'

const node = document.getElementById('root')

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  node
)
