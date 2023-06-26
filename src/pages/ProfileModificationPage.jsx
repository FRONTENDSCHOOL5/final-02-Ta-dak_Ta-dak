import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useImageUploader from '../hooks/useImageUploader'
import useAlertControl from '../hooks/useAlertControl';
import styled from 'styled-components';

import UploadHeader from '../components/header/UploadHeader';
import { Input } from '../components/common/Input';
import { FileUploadLg } from '../components/common/FileUpload'
import { profilemodificationReq } from '../api/profilemodificationAPI';
import { postAccountValid } from '../api/signupAPI';
import { UserAtom } from '../recoil/AtomUserState';
import { useRecoilState } from 'recoil';
import Alert from '../components/common/Alert';

export default function ProfileModificationPage() {

  const { handleImageChange, imageURL, imagePath, uploadValidity} = useImageUploader();
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = location.state;
  const [name, setName] = useState(userInfo.username || '')
  const [nameValid, setNameValid] = useState(true);
  const [nameAlertMsg, setNameAlertMsg] = useState('')
  const [id, setId] = useState(userInfo.accountname || '')
  const [idValid, setIdValid] = useState(true);
  const [idAlertMsg, setIdAlertMsg] = useState('');
  const [intro, setIntro] = useState(userInfo.intro || '')
  const [userValue, setUserValue] = useRecoilState(UserAtom);
  
  const handleNameInput = (event) => {
    const value = event.target.value;
    if (value.length >= 2 && value.length <= 10) {
      setNameAlertMsg('')
      setNameValid(true)
    } else {
      setNameAlertMsg('2~10자 이내여야 합니다.')
      setNameValid(false)
    }
    setName(value)
  };
  
  const handleIdProfile = async () => {
    const pattern = /^[A-Za-z0-9_.]+$/;
    if(pattern.test(id)) {
      const Msg = await postAccountValid(id)
      setIdAlertMsg(Msg)
      Msg === "사용 가능한 계정ID 입니다." ?  setIdValid(true) :  setIdValid(false)
    } else {
      setIdAlertMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setIdValid(false)
    }
  }

  const handleIdInput = (event) => {
    setId(event.target.value);
  };
  
  const handleIntroInput = (event) => {
    setIntro(event.target.value);
  };

  const submitModification = async () => {
    const data = await profilemodificationReq(name || userInfo.username, id || userInfo.accountname, intro || userInfo.intro, imagePath || userInfo.image);
    setUserValue({ ...userValue, accountname: id, image: imagePath || userInfo.image });
    navigate(`/profile/${id || userInfo.accountname}`);
    console.log(data.user);
  }

  useEffect(()=>{
    if (uploadValidity === '유효하지 않은 파일') {
      openAlert();
    }
  }, [uploadValidity])

  return(
    <>
      <ProfileModificationStyle>
        <UploadHeader valid={true} contents={'저장'} handleUploadBtnClick={submitModification} />
        <FileUploadStyle>
          <FileUploadLg onChange={handleImageChange} url={imageURL || userInfo.image} id={'profileEdit'}/> 
        </FileUploadStyle>
        <div className='profileInfo'>
          <Input id={'user-name'} type={'text'} label={'사용자 이름'} placeholder={'2~10자 이내여야 합니다.'} value={name} onChange={handleNameInput} valid={nameValid} alertMsg={nameAlertMsg}/>
          <Input id={'user-id'} type={'text'} label={'계정 ID'} placeholder={'영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'} value={id} onChange={handleIdInput} valid={idValid} onBlur={handleIdProfile} alertMsg={idAlertMsg}/>
          <Input id={'user-intro'} type={'text'} label={'소개'} placeholder={'자신과 판매할 상품에 대해 소개해 주세요!'} value={intro} onChange={handleIntroInput} valid={'true'}/>
        </div>
      </ProfileModificationStyle>
      <AlertComponent>
        <Alert alertMsg={'잘못된 업로드입니다.'} choice={['확인']}/>
      </AlertComponent>
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