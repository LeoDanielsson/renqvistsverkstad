import { createGlobalStyle } from 'styled-components';
import Typography from 'typography';
import { black, white, gold, copper } from '../colors';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyColor: black,
  headerFontFamily: ['Merriweather', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'sans-serif'],
});

const GlobalStyle = createGlobalStyle`
  ${typography.toString()}

  html {
    background-color: ${black};
  }

  body {
    margin: 0;
    padding: 0;
  }

  main {
    color: ${black};
    background-color: ${black};
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

  p {
    max-width: 80ch;
  }

  h1 {
    color: ${copper};
  }
`;

export default GlobalStyle;
