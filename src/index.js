import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ContextProvider from './contexts/index'

const node = document.getElementById('root')

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  node
)
