import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #FFFFFF;
    
    --red: #e52e4d;
    --blue: #5429CC;
    --green: #33CC96;
    
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
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
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