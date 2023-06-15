import { ResetStyle } from "../style/ResetStyle"
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from "../style/GlobalStyle"

import EmailSignUpPage from "../pages/EmailSignUpPage";
import ProfileSignUpPage from "../pages/ProfileSignUpPage";

export default function SignUpTest() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate to="/signup/" replace />} />
          <Route path="/signup/" element={<EmailSignUpPage />} />
          <Route path="/signup/profile" element={<ProfileSignUpPage />} />
        </Routes>
    </>
  );
}