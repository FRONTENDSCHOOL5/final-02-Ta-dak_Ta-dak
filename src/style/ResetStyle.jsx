const { createGlobalStyle } = require('styled-components');
const { default: reset } = require('styled-reset');

export const ResetStyle = createGlobalStyle`
  ${reset}

  a{
      text-decoration: none;
      color: inherit;
      cursor: pointer;
  }
  *,*::before, *::after{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  }
`;

export default ResetStyle;