import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/GlobalStyle';
import ResetStyle from './style/ResetStyle';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyle />
      <ResetStyle />
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
