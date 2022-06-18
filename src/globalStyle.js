import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh ;
    background-color: #1f1b2d;
    box-sizing: border-box ;
  }
`

export default GlobalStyle
