import { createGlobalStyle, styled } from "styled-components";


const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #E5DDD5;
  }

`;

export default GlobalStyle;

