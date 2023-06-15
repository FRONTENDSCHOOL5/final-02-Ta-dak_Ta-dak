import { ResetStyle } from '../style/ResetStyle';
import { Routes, Route, } from 'react-router-dom';
import GlobalStyle from '../style/GlobalStyle';

import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';

export default function SignUpTest() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/search" element={<SearchPage />} /> 
      </Routes>
    </>
  );
}