import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --ColorPrimary: #FF577F;
    --ColorPrimaryDisable: #59323F;
    --ColorGrey-400: #121214;
    --ColorGrey-300: #212529;
    --ColorGrey-200: #343B41;
    --ColorGrey-100: #868E96;
    --ColorGrey-000: #F8F9FA;
    --ColorSucess: #3FE864;
    --ColorNegative: #E83F5B;

  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    color: var(--ColorGrey-000);

    background-color: var(--ColorGrey-400);
  }

  button {
    cursor: pointer;
  }
`