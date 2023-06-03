import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100vh;
    & * {
      box-sizing: border-box;
    }
    
  }
  #root {
    width: 100%;
    height: 100%;
  }

  #modal {
    position: absolute;
    top: 65px;
    right: 0;
  }
`

export default GlobalStyles
