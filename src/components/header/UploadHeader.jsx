import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import { GreyMsBtn, BoldMsBtn } from '../common/Button';

import {ReactComponent as IconArrowLeft} from '../../assets/img/icon-arrow-left.svg'

export default function UploadHeader({valid, contents, handleUploadBtnClick}) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <BasicHeaderStyle>
      <IconArrowLeft onClick={handleGoBack} style={{cursor:'pointer'}}/>
      {
        valid
        ?<BoldMsBtn contents={contents} handleFunc={handleUploadBtnClick}/>
        :<GreyMsBtn contents={contents} />
      }
    </BasicHeaderStyle>
  )
}

const BasicHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);
`;