import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { DarkModeAtom } from './recoil/AtomDarkModeState'
import styled from 'styled-components'

import DefaultTheme from './style/theme/DefaultTheme'
import DarkTheme from './style/theme/DarkTheme'

import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import FeedHomePage from './pages/FeedHomePage';
import AddProductPage from './pages/AddProductPage';
import ProfileModificationPage from './pages/ProfileModificationPage'
import SignUpPage from './pages/SignUpPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import SearchPage from './pages/SearchPage';
import UserTutorialPage from './pages/UserTutorialPage';
import ChatListPage from './pages/ChatListPage'
import ChatRoomPage from './pages/ChatRoomPage'
import PostDetail from './pages/PostDetail';
import ProfilePage from './pages/ProfilePage';
import FollowListPage from './pages/FollowListPage';
import SplashPage from './pages/SplashPage';
import Page404 from './pages/404Page';
import { NavBar } from './components/common/NavBar';
import ProductDetailModal from './components/common/ProductDetailModal';
import { NonLoginProtectedRoute, LoginProtectedRoute } from './Routes/ProtectedRoute';
import TopButton from './components/common/TopButton';
import WebHeader from './components/pcVersion/WebHeader';
import WebNavBar from './components/pcVersion/WebNavBar';
import PostList from './components/UserPostList/PostList';
import WebFollowersRecommend from './components/pcVersion/WebFollowersRecommend';

function App() {

  const darkMode = useRecoilValue(DarkModeAtom);

  return (
    <PcStyle>
      <WebHeaderStyle>
        <WebHeader />
      </WebHeaderStyle>
      <MainStyle>
        <WebNavBarStyle>
          <WebNavBar />
        </WebNavBarStyle>

        <WrapperStyle>
          <BaseSizeStyle>
            <Routes>
              <Route path='/' element={<Navigate to='/splash' replace />} />
              <Route path='/404page' element={<Page404 />} />
              <Route path='/*' element={<Page404 />} />
              {/* 회원가입 */}

              <Route element={<LoginProtectedRoute />}>
                <Route path='/splash' element={<SplashPage />} />
                <Route path='/signup/' element={<SignUpPage />} />
                <Route path='/signup/profile' element={<ProfileSettingPage />} />
                {/* 로그인 */}
                <Route path='/login' element={<LoginPage />} />
              </Route>

              <Route element={<NonLoginProtectedRoute />}>
                {/* 게시물 업로드 */}
                <Route path='/upload' element={<UploadPage />} />
                <Route path='/feed/nonfollow' element={<UserTutorialPage />} />
                <Route path='/editpost' element={<UploadPage />} />
                <Route path='/feed' element={<FeedHomePage />} />
                <Route path='/recommendfeed' element={<FeedHomePage />} />
                <Route path='/addproduct' element={<AddProductPage />} />
                <Route path='/profilemodification' element={<ProfileModificationPage />} />
                <Route path='/chat' element={<ChatListPage />} />
                <Route path='/chatroom' element={<ChatRoomPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/postdetail/*' element={<PostDetail />} />
                <Route path='/addproduct' element={<AddProductPage />} />
                <Route path='/profilemodification' element={<ProfileModificationPage />} />
                <Route path='/profile/:accountname/*' element={<ProfilePage />} />
                <Route path='/profile/:accountname/follower' element={<FollowListPage />} />
                <Route path='/profile/:accountname/follower' element={<FollowListPage />} />
                <Route path='/profile/:accountname/following' element={<FollowListPage />} />
                <Route path='/productdetail' element={<ProductDetailModal />} />
              </Route>
            </Routes>
            <NavBar />
            {darkMode ? <DarkTheme /> : <DefaultTheme />}
          </BaseSizeStyle>
        </WrapperStyle>

        <WebFollowersRecommendStyle>
          <Routes>
            <Route path='/feed' element={<WebFollowersRecommend />} />
            <Route path='/recommendfeed' element={<WebFollowersRecommend />} />
            <Route path='/profile/*' element={<WebFollowersRecommend />} />
          </Routes>
        </WebFollowersRecommendStyle>
      </MainStyle>
    </PcStyle>
  )
}

export default App

const PcStyle = styled.div`
  background-color: var(--background-color);
`

const WebHeaderStyle = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainStyle = styled.div`
  display: flex;
  justify-content: center;   
  margin-left : 172px; // 팔로우 추천, 네비게이션 바의 너비 차이 만큼 오른쪽으로 땡기기

  @media (max-width: 768px) {
    margin-left : 0;
  }
`;

const WebNavBarStyle = styled.div`
  margin-top: 4%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WebFollowersRecommendStyle = styled.div`
  margin-top: 4%;
  display: none;
  
  @media (min-width: 1300px) {
    display: block;
  }
`;

const WrapperStyle = styled.div`
  margin-top:26px;
  display: flex;
  justify-content: center;    
`;

const BaseSizeStyle = styled.div`
  margin: 0 110px; // 팔로우 추천, 네비게이션 바 간격 고정되도록 가운데에 마진값 주기
  overflow: hidden;
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);
`;

