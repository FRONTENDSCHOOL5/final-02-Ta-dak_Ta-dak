const { createGlobalStyle } = require('styled-components');

export const DefaultTheme = createGlobalStyle`

  :root {

    --background-color: #FCFBF3;
    --modal-background-color: #FCFBF3;
    --modal-blur-color: rgba(0, 0, 0, 0.2);

    --basic-color-1: #B9D6A3; 
    --basic-color-2: #4E683F; 
    --basic-color-3: #FDF5B9;
    --basic-color-4: #FFF;
    --basic-color-5: #1C8A00;
    --basic-color-6: #DBDBDB;

    --modal-color: #FCFBF3;
    --alert-color: #FCFBF3;

    --border-color: #8E6D5B;

    --btn-text-color-1: #FCFBF3;
    --btn-text-color-2: #A2A378;

    --disabled-btn-color: #E6E2E2;
    --basic-btn-color: #B9D6A3;
    --bold-btn-color: #4E683F;
    
    --text-color-1: #000;
    --text-color-2: #767676;
    --text-color-3: #333;

    --common-text-color-1: #FFF;
    --common-text-color-2: #000;

    --icon-active-on:#767676;
    --icon-active-off: #DBDBDB;
    
    --header-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    --header-color: #FCFBF3;
  }
`;

export default DefaultTheme;
