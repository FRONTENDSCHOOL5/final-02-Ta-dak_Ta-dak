const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

  * {
    transition: background-color .3s, color .3s;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    /* line-height: 1.5; */
    overflow: hidden;
  }

  :root {
    --basic-width : 390px;
    --basic-height : 100vh;
    --screen-height : calc(var(--basic-height) - 48px);
    --screen-nav-height : calc(var(--basic-height) - (60px + 48px));

    --font--size-lg: 16px;
    --font--size-md: 14px;
    --font--size-sm: 12px;

    --font--Bold: 700;
    --font--Medium: 500;
    --font--Regular: 400;
  }
`;

export default GlobalStyle;
