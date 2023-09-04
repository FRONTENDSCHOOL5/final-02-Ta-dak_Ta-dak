import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Tadak } from '../assets/img/tadak.svg';
import { ReactComponent as Fire } from '../assets/img/fire.svg';
import { ReactComponent as WoodFire } from '../assets/img/woodfire.svg';
import { ReactComponent as SubTitle } from '../assets/img/subtitle.svg';
import { ReactComponent as FireworkR } from '../assets/img/firework-r.svg';
import { ReactComponent as FireworkL } from '../assets/img/firework-l.svg';
import { ReactComponent as Kakao } from '../assets/img/icon-kakao.svg';
import { ReactComponent as Google } from '../assets/img/icon-google.svg';
import { ReactComponent as Facebook } from '../assets/img/icon-facebook.svg';
import { ReactComponent as ArrowTop } from '../assets/img/icon-arrow-top.svg';

export default function SplashPage() {

  const [isLoginModal, setIsLoginModal] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => setIsLoginModal(true), 1500)
    return () => clearTimeout(timer)
  },[])

  return (
    <>
      <SplashPageStyle>
        <SplashCharacterContainer>
          <TitleStyle1></TitleStyle1>
          <TitleStyle2></TitleStyle2>
          <CharacterStyle>
            <FireworkRStyle></FireworkRStyle>
            <FireworkLStyle></FireworkLStyle>
            <FireStyle></FireStyle>
            <WoodFireStyle></WoodFireStyle>
          </CharacterStyle>
          <SubTitleStyle></SubTitleStyle>
        </SplashCharacterContainer>
          {/* <LoginModalContainer> */}
            <LoginModalStyle isLoginModal={isLoginModal}>
              <button className="toggleBtn" type="button" onClick={()=>{setIsLoginModal(preV=>!preV)}}>
                <span>
                  <ArrowTop width={40}/>
                </span>
              </button>
              <ul>
                <li>
                  <BtnSocialStyle className='kakao' aria-label='카카오로 로그인'>
                    <Kakao></Kakao>
                    <p>카카오톡 계정으로 로그인</p>
                  </BtnSocialStyle>
                </li>
                <li>
                  <BtnSocialStyle className='google' aria-label='구글로 로그인'>
                    <Google></Google>
                    <p>구글 계정으로 로그인</p>
                  </BtnSocialStyle>
                </li>
                <li>
                  <BtnSocialStyle className='facebook' aria-label='페이스북으로 로그인'>
                    <Facebook></Facebook>
                    <p>페이스북 계정으로 로그인</p>
                  </BtnSocialStyle>
                </li>
              </ul>
              <div>
                <Link to="/login">
                  <button className='email-login'>이메일로 로그인</button>
                </Link>
                <span>|</span>
                <Link to="/signup">
                  <button className='Signup'>회원가입</button>
                </Link>
              </div>
            </LoginModalStyle>
          {/* </LoginModalContainer> */}
      </SplashPageStyle>
    </>
  )
}

const SplashCharacterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const firework1 = keyframes`
  0% {
    transform: rotate(8deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  50% {
    
    transform: rotate(8deg)
  }
  70% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(8deg);
  }
  `;
const firework2 = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-80px);
}
`
const firework3 = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-60px);
}
`

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const SplashPageStyle = styled.div`
position: relative;
background-color: #FFFFEA;
width: 100vw;
height: 100vh;

  @media (min-width: 390px) {
    width: 100%;
    height: var(--basic-height);
    }  
`

const TitleStyle1 = styled(Tadak)`
  position: absolute;
  transform: translate(-80%, -50%);
  margin-top: -250px;
`

const TitleStyle2 = styled(Tadak)`
  position: absolute;
  transform: translate(-20%, -50%);
  margin-top: -150px;
`

const CharacterStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const FireStyle = styled(Fire)`
  margin-left: 80px;
  margin-top: 200px;
  z-index: 100;
  animation: ${firework1} 2s infinite;
`

const WoodFireStyle = styled(WoodFire)`
  margin-top: -260px;
`


const FireworkRStyle = styled(FireworkR)`
  position: absolute;
  margin-left: 300px;
  margin-top: 250px;
  animation: ${firework2} 2s infinite;
`

const FireworkLStyle = styled(FireworkL)`
  position: absolute;
  margin-left: 40px;
  margin-top: 250px;
  animation: ${firework3} 2s infinite;
`


const SubTitleStyle = styled(SubTitle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 300px;
`;

const LoginModalStyle = styled.article`
  width: var(--basic-width);
  height: 500px;
  border-radius: 20px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  transition: 1s;
  transform: ${( props ) => (props.isLoginModal ? 'translateY(30%)' : 'translateY(100%)')};
  z-index: 101;

  .toggleBtn {
    width: 120px;
    height: 40px;
    position: absolute;
    top: -40px;
    right: 50%;
    transform: translateX(50%);
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    animation: ${fadeIn} 2s ease-in;
    background: #D9D9D9;
    opacity: 0.9;
    span {
      display: block;
      transform: ${({isLoginModal}) => (isLoginModal ? 'rotate(180deg)' : 'rotate(0)')};
      transition: .2s;
    }
  }

  ul {
    list-style: none;
    position: relative;
    top: 20px
  }
  div {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
      button {
        font-size: var(--font--size-lg);
        color: var(--common-text-color-2);
      }
  }
  @media (min-width: 390px) {
    width: 100%;
    }

`
const BtnSocialStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 322px;
  height: 44px;
  margin: 20px auto;
  position: relative;
  border-radius: 44px;
  p {
    font-size: var(--font--size-md);
  }
  svg {
    margin-left: 14px;
  }
  &.kakao {
    border: solid 1px #F2C94C;
  }
  &.google {
    border: solid 1px #767676;
  }
  &.facebook {
    border: solid 1px #2D9CDB;
  }
  @media (min-width: 768px) {
    width: calc(100% - 40px);
    justify-content: center;
    gap: 10px;
    
    svg {
      margin-left: 0px;
    }
  }`