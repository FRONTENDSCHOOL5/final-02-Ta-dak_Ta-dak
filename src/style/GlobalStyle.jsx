const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

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

    --background-color: #FCFBF3;
    --basic-color-1: #FDF5B9; // 피드 버튼 색상,
    --basic-color-2: #B9D6A3; // 기본 버튼 색상,
    --basic-color-3: #4E683F; // 프로필 버튼 색상,
    --basic-color-4: #1C8A00; // input active 색상,
    --basic-color-5: #A2A378; // 글자 비활성화 색상,
    --basic-color-6: #E6E2E2; // 버튼 비활성화 색상,
    --basic-color-7:#767676; // label 글자 색상,
    --basic-color-8:#dbdbdb; // input border bottom 색상,
    
    --font--size-lg: 16px;
    --font--size-md: 14px;
    --font--size-sm: 12px;

    --font--Bold: 700;
    --font--Medium: 500;
    --font--Regular: 400;
  }
`;

export default GlobalStyle;
