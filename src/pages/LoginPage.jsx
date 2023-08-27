import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IsLogin, UserAtom} from '../recoil/AtomUserState';
import styled from 'styled-components';

import { Input } from '../components/common/Input';
import { GreenLgBtn, GreyLgBtn } from '../components/common/Button';
import { loginReq } from '../api/loginAPI';
import Check from '../assets/img/checkbox.svg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [alertMsg, setAlertMsg] = useState('');
  const [userValue, setUserValue] = useRecoilState(UserAtom);
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleInputFocus = (event) => {
    setValid(true);
    setAlertMsg('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLogin) {
      const User = await loginReq(email, password);
      console.log(User)
      if (User.status === 422) {
        // 로그인 실패한 경우
        setValid(false);
        setAlertMsg(User.message);
        setEmail('');
        setPassword('');
      } else {
        // 로그인 성공한 경우
        // UserAtom에 로그인된 회원 정보 저장
        const userInfo = User.user;
        setUserValue({...userValue,
          id:userInfo._id,
          accountname: userInfo.accountname,
          token: userInfo.token,
          refreshToken: userInfo.refreshToken,
          image: userInfo.image,
        });
        setValid(true);
        setIsLogin(true);
        navigate('/feed');
      }
    } else{
      alert('이미 로그인돼잇음')
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setEmail('tadaktadak@email.com');
      setPassword('tadaktadak');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <LoginPageStyle>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id={'user-email'}
            type={'email'}
            label={'이메일'}
            value={email}
            valid={valid}
            onChange={handleEmailInput}
            onFocus={handleInputFocus}
          />
          <Input
            id={'user-password'}
            type={'password'}
            label={'비밀번호'}
            value={password}
            valid={valid}
            alertMsg={alertMsg}
            onChange={handlePasswordInput}
            onFocus={handleInputFocus}
          />
          {email && password ? (
            <GreenLgBtn type="submit" contents={'로그인'} />
          ) : (
            <GreyLgBtn type="submit" contents={'로그인'} />
          )}
        </form>
        <FeatureStyle>
          <label>
            <StyledInput type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="custom-checkbox"/>체험용 계정 사용하기
          </label>
          <p>|</p>
          <SignUpLink href="signup#/signup">이메일로 회원가입</SignUpLink>
        </FeatureStyle>
      </LoginPageStyle>
    </>
  );
}

const LoginPageStyle = styled.section`
  padding: 34px;
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);

  @media (min-width: 768px) {
    padding: 34px 0px;
  }
  
  h1 {
    font-weight: var(--font--Medium);
    font-size: 24px;
    text-align: center;
    padding-bottom: 40px;
    color: var(--text-color-1);
  }
`;

const FeatureStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  gap: 10px;
  p {
    margin-left: 10px;
    font-size: 18px;
  }

`
const StyledInput = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:checked {
}

`


const SignUpLink = styled.a`
  margin-left: 10px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
`;