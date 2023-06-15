import styled from 'styled-components';

import { UploadHeader } from '../components/header/UploadHeader';
import { Input, FileInputLg } from '../components/common/Input';
import { ResetStyle } from '../style/ResetStyle';
import { GlobalStyle } from '../style/GlobalStyle';

export default function ProfileModification() {
  return(
    <>
    <ProfileModificationStyle>
      <ResetStyle />
      <GlobalStyle />
      <UploadHeader />
      <FileInputLgStyle>
        <FileInputLg />
      </FileInputLgStyle>
      <div className='profileInfo'>
        <Input id={'user-name'} type={'text'} label={'사용자 이름'} placeholder='2~10자 이내여야 합니다.'/>
        <Input id={'user-id'} type={'text'} label={'계정 ID'} placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'/>
        <Input id={'user-intro'} type={'text'} label={'소개'} placeholder='자신과 판매할 상품에 대해 소개해 주세요!'/>
      </div>
    </ProfileModificationStyle>
    </>
  )
}

const ProfileModificationStyle = styled.div`
  background-color: var(--background-color);
  width: 390px;
  height: 844px;

  .profileInfo {
    margin: 16px 34px;
    margin-top: 30px;
  }
`
const FileInputLgStyle = styled.div`
  margin-left: 140px;
  margin-top: 78px;
`