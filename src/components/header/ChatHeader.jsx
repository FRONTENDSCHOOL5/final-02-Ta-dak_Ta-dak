import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import {ReactComponent as IconArrowLeft} from '../../assets/img/icon-arrow-left.svg'
import {ReactComponent as IconSMore} from '../../assets/img/icon-more.svg'

export default function ChatHeader({name, isButton, handleFunc}) {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <ChatHeaderStyle>
      <IconArrowLeft onClick={handleGoBack} style={{cursor:'pointer'}}/>
      <h2>{name}</h2>
      {isButton && <IconSMore onClick={handleFunc} style={{cursor:'pointer'}}/>}
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
    color: var(--common-text-color-2);
  }
`;