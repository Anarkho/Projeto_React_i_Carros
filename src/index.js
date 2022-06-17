import React from 'react'
import ReactDOM from 'react-dom/client'
import Favicon from 'react-favicon'
import Icon from '../public/favicon.ico'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <>
    <Favicon url={Icon} />
    <App />
  </>
)
