
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
      <img src={IconArrowLeft} alt="" onClick={handleGoBack}/>
      <h2>애월읍 위니브 감귤농장</h2>
      <img src={IconSMore} alt="" />
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
  width: 390px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    position: absolute;
    left: 48px;
    font-weight: var(--font--Medium);
    font-size: var(--font--size-md);
  }

  img {
    width: 22px;
    height: 22px;
  }
`;