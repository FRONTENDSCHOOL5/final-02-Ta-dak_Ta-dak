import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DarkModeBtn from '../DarkModeBtn';
import {ReactComponent as IconSearch} from '../../assets/img/icon-search.svg';

export default function MainHeader() {

  const navigate = useNavigate();

  return (
    <MainHeaderStyle>
      <h2>타닥타닥 피드</h2>
      <DarkModeBtnPosition>
        <DarkModeBtn />
      </DarkModeBtnPosition>
      <IconSearch style={{cursor: 'pointer'}} onClick={()=> navigate('/search')}/>
    </MainHeaderStyle>
  );
}

const MainHeaderStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: var(--basic-width);
  min-height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);

  h2 {
    font-weight: var(--font--Medium);
    font-size: 18px;
    color: var(--common-text-color-2);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DarkModeBtnPosition = styled.div`
  position: absolute;
  right: 56px;
`;
