import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';


import { ReactComponent as Tadak } from '../../assets/img/tadak.svg';
import { ReactComponent as WebLogo } from '../../assets/img/weblogo.svg';
import { ReactComponent as IconLogout } from '../../assets/img/icon-logout.svg';
import DarkModeBtn from '../DarkModeBtn';

import { useSetRecoilState } from 'recoil'
import { IsLogin, UserAtom } from '../../recoil/AtomUserState';

import Alert from '../common/Alert';
import useAlertControl from '../../hooks/useAlertControl';


export default function WebHeader() {
  const navigate = useNavigate()

  const { openAlert, AlertComponent } = useAlertControl();

  const setUserValue = useSetRecoilState(UserAtom);
  const setIsLogin = useSetRecoilState(IsLogin);

  const location = useLocation();
  const hideHeaderPaths = [
    '/splash',
    '/login',
    '/signup',
    '/signup/profile'
  ]

  const hideHeader = hideHeaderPaths.includes(location.pathname);

  const handleGoFeed = () => {
    navigate('/feed');
  }

  const handleLogout = (event) =>{
    if (event.target.textContent === '로그아웃') {
      setUserValue({})
      setIsLogin(false)
      sessionStorage.removeItem('user')
      navigate('/splash');
    } 
  }

  <AlertComponent>
    <Alert alertMsg={'로그아웃 하시겠습니까?'} choice={['취소', '로그아웃']} handleFunc={handleLogout} />
  </AlertComponent>
  return (
    <>
      {!hideHeader &&
        <WebHeaderStyle>
          <WebLogoStyle>
            <WebLogo onClick={handleGoFeed} style={{ cursor: 'pointer' }}></WebLogo>
            <TadakStyle>
              <Tadak onClick={handleGoFeed} style={{ width: '104px', height: '25.58 px', cursor: 'pointer' }} />
            </TadakStyle>
          </WebLogoStyle>
          <BtnStyle>
            <DarkModeBtn />
            <IconLogout onClick={openAlert} style={{ width: '24px', height: '24px', cursor: 'pointer'}} />
          </BtnStyle>
        </WebHeaderStyle>
      }
      <AlertComponent>
        <Alert alertMsg={'로그아웃 하시겠습니까?'} choice={['취소', '로그아웃']} handleFunc={handleLogout} />
      </AlertComponent>
    </>
  )
}

const WebHeaderStyle = styled.div`
  width: 100vw;
  height: 80px;
  background-color: var(--basic-color-1);
  display: flex;
  justify-content: space-between;
`;

const WebLogoStyle = styled.div`
  padding-top:12px;
  margin-left: 10%;
  display: flex;
  gap: 16px;
`;

const TadakStyle = styled.div`
  position: relative;
  top: -10px; 
`;

const BtnStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-right: 10%;
`;
