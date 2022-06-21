import React from 'react'
import Routes from './routes.js'
import { hotjar } from 'react-hotjar'

import GlobalStyle from './globalStyle'

// hotjar configs
hotjar.initialize(process.env.HOTJAR_ENV)
hotjar.identify(process.env.HOTJAR_ENV, {
  userProperty: 'value',
})
hotjar.event('button-click')
hotjar.stateChange('/')

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
