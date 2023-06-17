import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import UploadPage from '../pages/UploadPage';
import FeedHomePage from '../pages/FeedHomePage';
import AddProductPage from '../pages/AddProductPage';
import ProfileModificationPage from '../pages/ProfileModificationPage'
import SignUpPage from '../pages/SignUpPage';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import PostDetail from '../pages/PostDetail';

export default function PageTest() {
  return (
    <>
      <Routes>
        {/* 회원가입 */}
        <Route path='/' element={<Navigate to='/signup/' replace />} />
        <Route path='/signup/' element={<SignUpPage />} />
        <Route path='/signup/profile' element={<ProfileSettingPage />} />
        {/* 로그인 */}
        <Route path='/login' element={<LoginPage />} />
        {/* 게시물 업로드 */}
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/feed' element={<FeedHomePage />} />
        <Route path='/postdetail/*' element={<PostDetail />} />
        <Route path='/addproduct' element={<AddProductPage />} />
        <Route path='/profilemodification' element={<ProfileModificationPage />} />
      </Routes>
    </>
  );
}