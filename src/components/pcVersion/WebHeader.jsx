import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useSetRecoilState } from 'recoil'
import { IsLogin, UserAtom } from '../../recoil/AtomUserState';
import { ReactComponent as Tadak } from '../../assets/img/tadak.svg';
import { ReactComponent as WebLogo } from '../../assets/img/weblogo.svg';
import { ReactComponent as IconLogout } from '../../assets/img/icon-logout.svg';
import DarkModeBtn from '../DarkModeBtn';

export default function WebHeader() {

  const setUserValue = useSetRecoilState(UserAtom);
  const setIsLogin = useSetRecoilState(IsLogin);
  const navigate = useNavigate();

  const location = useLocation();
  const hideHeaderPaths = [
    '/splash',
    '/login',
    '/signup'
  ]

  const hideHeader = hideHeaderPaths.includes(location.pathname);

  const handleLogout = (event) =>{
      setUserValue({})
      setIsLogin(false)
      sessionStorage.removeItem('user')
      navigate('/splash');
  }

  return (
    <>
      {!hideHeader &&
        <WebHeaderStyle>
          <WebLogoStyle>
            <WebLogo></WebLogo>
            <TadakStyle>
              <Tadak style={{ width: '104px', height: '25.58 px' }} />
            </TadakStyle>
          </WebLogoStyle>
          <BtnStyle>
            <DarkModeBtn style={{ width: '44px', height: '44px' }} />
            <IconLogout onClick={handleLogout} style={{ width: '23px', height: '23px', cursor: 'pointer'}} />
          </BtnStyle>
        </WebHeaderStyle>
      }
    </>
  )
}

const WebHeaderStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 80px;
    background-color: var(--basic-color-1);
    display: flex;
    justify-content: space-between;
    z-index: 1000;
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
