const { createGlobalStyle } = require('styled-components');

export const DarkTheme = createGlobalStyle`

  :root {

    --background-color: #44496b;

    --basic-color-1: #69514c; 
    --basic-color-2: #C9ADA7;
    --basic-color-3: #FDF5B9; 
    --basic-color-4: #555a7d; 
    --basic-color-5: #1C8A00; 
    --basic-color-6:#dbdbdb; 
    
    --modal-color: #FCFBF3;
    --alert-color: #FCFBF3;

    --border-color: #8e6d5b;

    --btn-text-color-1: #dbdbdb;
    --btn-text-color-2: #BFBFBF;

    --disabled-btn-color: #ab908b;
    --basic-btn-color: #8e6d5b;
    --bold-btn-color: #69514c;

    --text-color-1: #FFF;
    --text-color-2: #9e9e9e;
    --text-color-3: #c4c3c3;
    
    --common-text-color-1: #FFF;
    --common-text-color-2: #000;
    
    --icon-active-on:#DBDBDB;
    --icon-active-off: #767676;

    --header-shadow: 0px 2px rgba(247, 202, 0, 1);
  }
`;

export default DarkTheme;
