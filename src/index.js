import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import DataContextProvider from './contexts/DataContext'

const node = document.getElementById('app')

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  node
)
