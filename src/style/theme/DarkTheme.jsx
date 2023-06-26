const { createGlobalStyle } = require('styled-components');

export const DarkTheme = createGlobalStyle`

  :root {

    --background-color: #202127;
    --modal-background-color: #E5D6AE;
    --modal-blur-color: rgba(255, 255, 255, 0.2);

    --basic-color-1: #E5D6AE; 
    --basic-color-2: #75665D;
    --basic-color-3: #FDF5B9; 
    --basic-color-4: #FCFBF3; 
    --basic-color-5: #1C8A00; 
    --basic-color-6:#DBDBDB; 
    
    --modal-color: #FCFBF3;
    --alert-color: #FCFBF3;

    --border-color: #FCFBF3;

    --btn-text-color-1: #DBDBDB;
    --btn-text-color-2: #BFBFBF;

    --disabled-btn-color: #E6E2E2;
    --basic-btn-color: #E5D6AE;
    --bold-btn-color: #75665D;

    --text-color-1: #DDD;
    --text-color-2: #9E9E9E;
    --text-color-3: #C4C3C3;
    
    --common-text-color-1: #FFF;
    --common-text-color-2: #000;
    
    --icon-active-on:#DBDBDB;
    --icon-active-off: #767676;

    /* --header-shadow: 0px 2px rgba(255, 255, 255, 1); */
    --header-color: #E5D6AE
  }
`;

export default DarkTheme;
