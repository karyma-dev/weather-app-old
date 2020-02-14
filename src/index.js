import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ContextProvider from './contexts'

const node = document.getElementById('root')

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  node
)
