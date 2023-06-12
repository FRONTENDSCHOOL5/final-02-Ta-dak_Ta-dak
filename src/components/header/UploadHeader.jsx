
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import { GreyMsBtn } from '../common/Button';

import IconArrowLeft from '../../assets/img/icon-arrow-left.svg'

export function UploadHeader() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <BasicHeaderStyle>
      <img src={IconArrowLeft} alt="" onClick={handleGoBack}/>
      <GreyMsBtn contents={'저장'}/>
    </BasicHeaderStyle>
  )
}

const BasicHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: 390px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 22px;
    height: 22px;
  }
`;