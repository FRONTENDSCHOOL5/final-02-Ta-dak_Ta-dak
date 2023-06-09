const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
    /* line-height: 1.5; */
  }

  :root {
    --background-color: #FCFBF3;
    --first-feed-btn-color: #FDF5B9;
    --basic-btn-color: #B9D6A3;
    --profile-btn-color: #4E683F;
    --input-active-btn-color: #1C8A00;
    --disabled-font-color: #A2A378;
    --disabled-btn-color: #E6E2E2;

    --label-font-color:#767676;
    --border-light-color:#dbdbdb;

    
    --font--size-lg: 16px;
    --font--size-md: 14px;
    --font--size-sm: 12px;

    --font--Bold: 700;
    --font--Medium: 500;
    --font--Regular: 400;
  }
`;

export default GlobalStyle;
