import { useState } from 'react';
import useImageUploader from '../hooks/useImageUploader'
import styled from 'styled-components';

import UploadHeader from '../components/header/UploadHeader';
import { Input } from '../components/common/Input';
import { FileUploadLg } from '../components/common/FileUpload'
import putProfilemodification from '../api/profilemodificationAPI';

export default function ProfileModificationPage() {
  const [name, setName] = useState('')
  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const [id, setId] = useState('')
  const handleIdInput = (event) => {
    setId(event.target.value);
  };
  
  const [intro, setIntro] = useState('')
  const handleIntroInput = (event) => {
    setIntro(event.target.value);
  };

  const { handleImageChange, imageURL, imagePath } = useImageUploader();

  const submitModification = async () => {
    const data = await putProfilemodification(name, id, intro);
    console.log(data.user);
  }

  return(
    <>
      <ProfileModificationStyle>
        <UploadHeader valid={true} contents={'저장'} handleUploadBtnClick={submitModification} />
        <FileUploadStyle>
          <FileUploadLg onChange={handleImageChange} /> 
          {/*onChange={handleImageChange} url={imageURL}  */} 
        </FileUploadStyle>
        <div className='profileInfo'>
          <Input id={'user-name'} type={'text'} label={'사용자 이름'} placeholder='2~10자 이내여야 합니다.' value={name} onChange={handleNameInput}/>
          <Input id={'user-id'} type={'text'} label={'계정 ID'} placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.' value={id} onChange={handleIdInput}/>
          <Input id={'user-intro'} type={'text'} label={'소개'} placeholder='자신과 판매할 상품에 대해 소개해 주세요!' value={intro} onChange={handleIntroInput}/>
        </div>
      </ProfileModificationStyle>
    </>
  )
}

const ProfileModificationStyle = styled.div`
  
  .profileInfo {
    margin: 16px 34px;
    margin-top: 30px;
  }
`;

const FileUploadStyle = styled.div`
  margin-left: 140px;
  margin-top: 78px;
`