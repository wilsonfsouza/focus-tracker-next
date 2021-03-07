import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; // 1rem = 10px

    @media screen and (max-width: 1200px) {
      font-size: 59.5%;
    }

    @media screen and (max-width: 992px) {
      font-size: 56.5%;
    }

    @media screen and (max-width: 768px) {
      font-size: 53.5%;
    }

    @media screen and (max-width: 576px) {
      font-size: 50.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialised;
    transition: all 0.2s;
  }

  body, input, textarea, button {
    font: 400 1.6rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;
