import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DarkModeAtom } from './recoil/AtomDarkModeState'
import styled from 'styled-components'

import { IsLogin, UserAtom } from './recoil/AtomUserState';
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
import WebHeader from './components/pcVersion/WebHeader';
import WebNavBar from './components/pcVersion/WebNavBar';
import WebFollowersRecommend from './components/pcVersion/WebFollowersRecommend';
import WebBillboard from './components/pcVersion/WebBillboard';
import Alert from './components/common/Alert';
import useAlertControl from './hooks/useAlertControl';


function App() {

  const darkMode = useRecoilValue(DarkModeAtom);
  const { openAlert, AlertComponent } = useAlertControl();

  const setUserValue = useSetRecoilState(UserAtom);
  const setIsLogin = useSetRecoilState(IsLogin);
  const navigate = useNavigate();

  const handleLogout = (event) =>{
    if (event.target.textContent === '로그아웃') {
      setUserValue({})
      setIsLogin(false)
      sessionStorage.removeItem('user')
      navigate('/splash');
    } 
  }

  return (
    <PcStyle>
      <WebHeaderStyle>
        <WebHeader handleFunc={openAlert}/>
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
          <AlertComponent>
            <Alert alertMsg={'로그아웃 하시겠습니까?'} choice={['취소', '로그아웃']} handleFunc={handleLogout} />
          </AlertComponent>
          </BaseSizeStyle>
        </WrapperStyle>

        <WebFollowersRecommendStyle>
          <Routes>
            <Route path='/feed' element={<WebFollowersRecommend />} />
            <Route path='/recommendfeed' element={<WebFollowersRecommend />} />
            <Route path='/profile/*' element={<WebFollowersRecommend />} />
          </Routes>
          <WebBillboard />
        </WebFollowersRecommendStyle>
      </MainStyle>
      {darkMode ? <DarkTheme /> : <DefaultTheme />}
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
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 26px;
  }
`;

const BaseSizeStyle = styled.div`
  margin: 0 110px; // 팔로우 추천, 네비게이션 바 간격 고정되도록 가운데에 마진값 주기
  overflow: hidden;
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);
`;

