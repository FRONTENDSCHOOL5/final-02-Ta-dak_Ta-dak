import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import { ReactComponent as Tadak} from '../../assets/img/tadak.svg';
import { ReactComponent as WebLogo} from '../../assets/img/weblogo.svg';
import { ReactComponent as IconLogout}  from '../../assets/img/icon-logout.svg';
import DarkModeBtn from '../DarkModeBtn';

export default function WebHeader({handleFunc}) {
  const navigate = useNavigate()

  const handleGoFeed = () =>{
    navigate('/feed');
  }

  return (
    <WebHeaderStyle>
        <WebLogoStyle>
            <WebLogo onClick={handleGoFeed}></WebLogo>
            <TadakStyle>
              <Tadak onClick={handleGoFeed} style={{ width: '104px', height: '25.58 px' }}/>
            </TadakStyle>
        </WebLogoStyle>
        <BtnStyle>
          <DarkModeBtn style={{ width: '44px', height: '44px'}}/>
          <IconLogout onClick={handleFunc} style={{ width: '30px', height: '30px', cursor: 'pointer', margin: '25px 0'}}/>
        </BtnStyle>
    </WebHeaderStyle>
  )
}

const WebHeaderStyle = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #B9D6A3;
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
 gap: 28px;
 margin-right: 10%;
`;
