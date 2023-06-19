import React from 'react'

import styled, {keyframes} from 'styled-components'

import { ReactComponent as Tadak} from '../assets/img/tadak.svg';
import { ReactComponent as Fire} from '../assets/img/fire.svg';
import { ReactComponent as WoodFire} from '../assets/img/woodfire.svg';
import { ReactComponent as SubTitle} from '../assets/img/subtitle.svg';
import { ReactComponent as FireworkR} from '../assets/img/firework-r.svg';
import { ReactComponent as FireworkL} from '../assets/img/firework-l.svg';

export default function SplashPage() {
  return (
    <>
    <SplashPageStyle>
        <TitleStyle1></TitleStyle1>
        <TitleStyle2></TitleStyle2>
        <FireworkRStyle></FireworkRStyle>
        <FireworkLStyle></FireworkLStyle>
        <FireStyle></FireStyle>
        <WoodFireStyle></WoodFireStyle>
        <SubTitleStyle></SubTitleStyle>
    </SplashPageStyle>
    </>
  )
}

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

const SplashPageStyle = styled.div `
background-color: #FFFFEA;
width: var(--basic-width);
height: var(--basic-height);
`

const TitleStyle1 = styled(Tadak)`
  margin: 160px 96px 0px 50px;
`

const TitleStyle2 = styled(Tadak)`
  margin: 10px 50px 0px 96px;
`

const FireStyle = styled(Fire)`
  margin: 0 auto;
  position: relative;
  top: 110px;
  left: 60px;
  z-index: 100;
  animation: ${firework1} 2s infinite;
`  

const FireworkRStyle = styled(FireworkR)`
  position: relative;
  left: 300px;
  animation: ${firework2} 2s infinite;
`

const FireworkLStyle = styled(FireworkL)`
  position: relative;
  top: -20px;
  left: 50px;
  animation: ${firework3} 2s infinite;
` 

const WoodFireStyle = styled(WoodFire)`
  position: relative;
  width: 400px;
  height: 400px;
  top: -170px;
`

const SubTitleStyle = styled(SubTitle)`
  position: relative;
  top: -150px;
  margin: 10px 88px; 
`