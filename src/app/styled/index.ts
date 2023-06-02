import {createGlobalStyle} from "styled-components";

const GlobalStyles =  createGlobalStyle`
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
`

export default GlobalStyles
