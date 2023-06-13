import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100vw;
    height: 100vh;

    overflow-x: hidden;
  }

  input {
    border: none;
  }

  input:focus {
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  button{
    border:none;
  }

`