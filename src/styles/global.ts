import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #FFFFFF;
    
    --red: #e52e4d;
    --blue: #5429CC;
    
    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: ##969CB3;

  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`