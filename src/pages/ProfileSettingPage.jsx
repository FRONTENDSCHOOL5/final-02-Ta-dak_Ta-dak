import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { SignUpAtom } from '../recoil/AtomSignupState'
import { postAccountValid } from '../api/signupAPI'
import { postSignUp } from '../api/signupAPI'
import useImageUploader from '../hooks/useImageUploader'
import useAlertControl from '../hooks/useAlertControl';
import styled from 'styled-components'

import { Input } from '../components/common/Input'
import { FileUploadLg } from '../components/common/FileUpload'
import { GreenLgBtn, GreyLgBtn } from '../components/common/Button'
import Alert from '../components/common/Alert';

export default function ProfileSettingPage() {
  const navigate = useNavigate();
  const [reqFrame, setReqFrame] = useRecoilState(SignUpAtom)
  const { handleImageChange, imageURL, imagePath, uploadValidity } = useImageUploader();
  const { openAlert, AlertComponent } = useAlertControl();
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [usernameValid, setUsernameValid] = useState(true)
  const [idValid, setIdValid] = useState(true)
  const [usernameAlertMsg, setUsernameAlertMsg] = useState('');
  const [idAlertMsg, setIdAlertMsg] = useState('');
  const [beforeBtnClick, setBeforeBtnClick] = useState(true);

  const handleIdValid = async () => {
    const pattern = /^[A-Za-z0-9_.]+$/;
    if (pattern.test(id)) {
      const Msg = await postAccountValid(id)
      setIdAlertMsg(Msg)
      Msg === "사용 가능한 계정ID 입니다." ? setIdValid(true) : setIdValid(false)
    } else {
      setIdAlertMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setIdValid(false)
    }
  }

  const handleUsernameValid = (event) => {
    const value = event.target.value;
    if (value.length >= 2 && value.length <= 10) {
      setUsernameAlertMsg('');
      setUsernameValid(true)
    } else {
      setUsernameAlertMsg('2~10자 이내여야 합니다.');
      setUsernameValid(false)
    }
    setUsername(value);
  }

  const handleAlert = () => {
    navigate('/splash')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && id && usernameValid && idValid) {
      setReqFrame(prevValue => {
        return {
          ...prevValue,
          username: username,
          accountname: id,
          intro: introduce,
          image: imagePath || 'https://api.mandarin.weniv.co.kr/1687452108456.png'
        }
      })
    }
  }

  useEffect(() => {
    const postSignUpReq = async () => {
      if (username && id && usernameValid && idValid) {
        const result = await postSignUp(reqFrame);
        if (result) {
          setBeforeBtnClick(false);
          openAlert();
          const timer = setTimeout(() => {
            navigate('/login')
          }, 3000)
          return () => {
            clearTimeout(timer);
          }
        }
      }
    }
    postSignUpReq();
  }, [reqFrame])

  useEffect(() => {
    if (uploadValidity === '유효하지 않은 파일') {
      openAlert();
    }
  }, [uploadValidity])

  return (
    <>
      <ProfileSignUpPageStyle onSubmit={handleSubmit}>
        <div>
          <h1>프로필 설정</h1>
          <p>나중에 언제든지 변경할 수 있습니다.</p>
        </div>
        <FileUploadLg id={'user-profile'} onChange={handleImageChange} url={imageURL} />
        <div>
          <Input id={'user-username'}
            type={'text'}
            label={'사용자 이름'}
            placeholder={'2~10자 이내여야 합니다.'}
            value={username}
            onChange={handleUsernameValid}
            valid={usernameValid}
            alertMsg={usernameAlertMsg}
          />
          <Input id={'user-id'}
            type={'text'}
            label={'계정 ID'}
            placeholder={'영문, 숫자, 특수문자(.),(...)만 사용 가능합니다.'}
            value={id}
            onChange={(event) => setId(event.target.value)}
            valid={idValid}
            onBlur={handleIdValid}
            alertMsg={idAlertMsg}
          />
          <Input id={'user-introduce'}
            type={'text'}
            label={'소개'}
            placeholder={'자신과 판매할 상품에 대해 소개해 주세요!'}
            value={introduce}
            onChange={(event) => setIntroduce(event.target.value)}
            valid={true}
          />
        </div>
        {username && id ?
          <GreenLgBtn type='submit' contents={'타닥타닥 시작하기'} /> :
          <GreyLgBtn type='submit' contents={'타닥타닥 시작하기'} />}
      </ProfileSignUpPageStyle>
      <AlertComponent>
        {beforeBtnClick ?
          <Alert alertMsg={'잘못된 업로드입니다.'} choice={['확인']} /> :
          <Alert alertMsg={'회원가입이 완료되었습니다.'} choice={['확인']} handleFunc={handleAlert} />}
      </AlertComponent>
    </>
  )
}

const ProfileSignUpPageStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 34px;
  
  h1 {
    text-align: center;
    font-weight: var(--font--Medium);
    font-size: 24px;
    padding-bottom: 12px;
  }

  p {
    font-weight: var(--font--Regular);
    font-size: var(--font--size-md);
    color: var(--text-color-1);
  }
`;
