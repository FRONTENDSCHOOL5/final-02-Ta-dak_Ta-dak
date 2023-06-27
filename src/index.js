import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/GlobalStyle';
import ResetStyle from './style/ResetStyle';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <HashRouter>
      <GlobalStyle />
      <ResetStyle />
      <App />
    </HashRouter>
  </RecoilRoot>
);
