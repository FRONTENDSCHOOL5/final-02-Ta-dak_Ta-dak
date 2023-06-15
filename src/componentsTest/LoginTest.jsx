import { ResetStyle } from '../style/ResetStyle';
import { Routes, Route, } from 'react-router-dom';
import GlobalStyle from '../style/GlobalStyle';

import LoginPage from '../pages/LoginPage';

export default function SignUpTest() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
