import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
  }
  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
