import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import IconArrowLeft from '../../assets/img/icon-arrow-left.svg'
import IconSMore from '../../assets/img/s-icon-more.svg'

export function ChatHeader() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <BasicHeaderStyle>
      <button className="backurl-btn" onClick={handleGoBack}></button>
      <h2>바베큐러버</h2>
      <button className="more-btn"></button>
    </BasicHeaderStyle>
  )
}

const BasicHeaderStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 12px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    position: absolute;
    left: 48px;
    font-weight: var(--font--Medium);
    font-size: var(--font--size-md);
  }

  button {
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .backurl-btn {
    background-image : url(${IconArrowLeft});
  }
  
  .more-btn {
    background-image : url(${IconSMore});
  }
`;