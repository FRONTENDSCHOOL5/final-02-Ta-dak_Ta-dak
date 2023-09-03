import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import DarkModeBtn from '../DarkModeBtn';
import { ReactComponent as IconArrowLeft } from '../../assets/img/icon-arrow-left.svg'
import { ReactComponent as IconSMore } from '../../assets/img/icon-more.svg'

export default function ChatHeader({ name, isButton, handleFunc }) {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <ChatHeaderStyle>
      <IconArrowLeftPosition>
        <IconArrowLeft onClick={handleGoBack} style={{ cursor: 'pointer' }} />
      </IconArrowLeftPosition>
      <h2>{name}</h2>
      <DarkModeBtnPosition>
        <DarkModeBtn />
      </DarkModeBtnPosition>
      <IconSMorePosition>
        {isButton && <IconSMore onClick={handleFunc} style={{ cursor: 'pointer' }} />}
      </IconSMorePosition>
    </ChatHeaderStyle>
  );
}

const ChatHeaderStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 12px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);

  
  h2 {
    position: absolute;
    left: 48px;
    font-weight: var(--font--Medium);
    font-size: var(--font--size-md);
    color: var(--text-color-1);
  }
  @media (min-width: 768px) {
    box-shadow: none;
    background-color: var(--background-color);
    
    h2{
      margin-left: -30px;
      font-size: var(--font--size-lg);
    }
  }
`;

const IconArrowLeftPosition = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const DarkModeBtnPosition = styled.div`
  position: absolute;
  right: 56px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const IconSMorePosition = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;