import { createGlobalStyle } from 'styled-components';
import Typography from 'typography';
import { darkGreen, white, gold, copper } from '../colors';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyColor: darkGreen,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'sans-serif'],
});

const GlobalStyle = createGlobalStyle`
  ${typography.toString()}

  html {
    background-color: ${darkGreen};
  }

  body {
    margin: 0;
    padding: 0;
  }

  main {
    color: ${white};
    background-color: ${darkGreen};
    min-height: 80vh;
  }

  button {
    border: none;
    background: none;
    outline: none;
    font-size: inherit;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${gold};
  }

  a:hover {
    color: ${white}
  }

  p {
    max-width: 80ch;
  }
  

  h1,h2,h3 {
    color: ${gold};
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
