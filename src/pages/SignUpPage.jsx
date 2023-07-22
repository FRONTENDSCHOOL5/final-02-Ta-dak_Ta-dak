import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { SignUpAtom } from "../recoil/AtomSignupState";
import styled from "styled-components"

import { Input } from "../components/common/Input"
import { GreenLgBtn, GreyLgBtn } from "../components/common/Button";
import { postEmailValid } from "../api/signupAPI";

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [emailAlertMsg, setEmailAlertMsg] = useState('');
  const [passwordAlertMsg, setPasswordAlertMsg] = useState('');
  const setReqFrame = useSetRecoilState(SignUpAtom);

  const navigate = useNavigate()
  
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event) => {
    const value = event.target.value
    setPassword(value)
    if (value.length >= 6) {
      setPasswordAlertMsg('')
      setPasswordValid(true)
    } else {
      setPasswordAlertMsg('비밀번호는 6자 이상이어야 합니다.')
      setPasswordValid(false)
    }
  }

  const handleEmailValid = async (event) => {
    const Msg = await postEmailValid(event.target.value);
    setEmailAlertMsg(Msg)
    Msg === '사용 가능한 이메일 입니다.' ? setEmailValid(true) : setEmailValid(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password && emailValid && passwordValid) {
      setReqFrame({ email, password })
      navigate('/signup/profile')
    } else {
      setReqFrame(false)
    } 
  }

  return (
    <>
      <SignUpPageStyle>
        <h1>이메일로 회원가입</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id={'user-email'}
            type={'email'}
            label={'이메일'}
            placeholder={'이메일 주소를 입력해 주세요.'}
            value={email}
            valid={emailValid}
            alertMsg={emailAlertMsg}
            onChange={handleEmailInput}
            onBlur={handleEmailValid}
          />
          <Input
            id={'user-password'}
            type={'password'}
            label={'비밀번호'}
            placeholder={'비밀번호를 설정해 주세요.'}
            value={password}
            valid={passwordValid}
            alertMsg={passwordAlertMsg}
            onChange={handlePasswordInput}
          />
          {email && password && emailValid && passwordValid?
            <GreenLgBtn type='submit' contents={'다음'} /> :
            <GreyLgBtn type='submit' contents={'다음'} />}
        </form>
      </SignUpPageStyle>
    </>
  )
}

const SignUpPageStyle = styled.div`
  padding: 34px;

  h1 {
    font-weight: var(--font--Medium);
    font-size: 24px;
    text-align: center;
    padding-bottom: 40px;
  }
`;