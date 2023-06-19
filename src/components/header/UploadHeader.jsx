import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import { GreyMsBtn, BoldMsBtn } from '../common/Button';

import IconArrowLeft from '../../assets/img/icon-arrow-left.svg'

export default function UploadHeader({valid, contents,  handleUploadBtnClick}) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <BasicHeaderStyle>
      <button className='backUrlBtn' onClick={handleGoBack}></button>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .backUrlBtn{
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
    background-image : url(${IconArrowLeft});
  }
`;