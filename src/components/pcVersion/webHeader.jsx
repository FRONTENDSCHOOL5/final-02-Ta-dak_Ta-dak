import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import { ReactComponent as Tadak} from '../../assets/img/tadak.svg';
import { ReactComponent as WebLogo} from '../../assets/img/weblogo.svg';
import { ReactComponent as IconSearch} from '../../assets/img/icon-search.svg';


// GlobalStyle width 변경 확인
export default function WebHeader() {
  const navigate = useNavigate();
  return (
    <WebHeaderStyle>
        <WebLogoStyle>
            <WebLogo></WebLogo>
        </WebLogoStyle>
        <TadakStyle>
        <Tadak style={{ width: '104px', height: '25.58 px' }}/>
        </TadakStyle>
        <SearchBarContainer>
        <IconSearch style={{ width: '20px', height: '20px', margin: '9px 12px', cursor: 'pointer'}}/>
          <SearchInput type="text" placeholder="검색" />
        </SearchBarContainer>
    </WebHeaderStyle>
  )
}

const WebHeaderStyle = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #B9D6A3;
    display: flex;
`;

const WebLogoStyle = styled.div`
    padding-top:12px;
    margin-left: 364px;
`;

const TadakStyle = styled.div`
    margin-left: 16px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px; 
  width: 358px;
  height: 38px;
  background-color: #fff;
  margin: 21px 202px 21px 819px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 300px;
`;
