import { Routes, Route, Navigate } from 'react-router-dom';

import ProfileSignUpPage from '../pages/ProfileSettingPage';
import LoginPage from '../pages/LoginPage';
import UploadPage from '../pages/UploadPage';
import FeedHomePage from '../pages/FeedHomePage';
import AddProductPage from '../pages/AddProductPage';
import ProfileModificationPage from '../pages/ProfileModificationPage'
import SignUpPage from '../pages/SignUpPage';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import SearchPage from '../pages/SearchPage';

import PostDetail from '../pages/PostDetail';
import { NavBar } from '../components/common/NavBar';

export default function PageTest() {
  return (
    <div>
      <Routes>
        {/* 회원가입 */}
        <Route path='/' element={<Navigate to='/signup' replace />} />
        <Route path='/signup/' element={<SignUpPage />} />
        <Route path='/signup/profile' element={<ProfileSettingPage />} />
        {/* 로그인 */}
        <Route path='/login' element={<LoginPage />} />
        {/* 게시물 업로드 */}
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/editpost' element={<UploadPage />} />
        <Route path='/feed' element={<FeedHomePage />} />
        <Route path='/addproduct' element={<AddProductPage />} />
        <Route path='/profilemodification' element={<ProfileModificationPage />} />
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/postdetail/*' element={<PostDetail />} />
      </Routes>
      <NavBar/>
    </div>
  );
}