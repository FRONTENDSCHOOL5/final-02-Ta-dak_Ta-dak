import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { DarkModeAtom } from '../recoil/AtomDarkModeState';
import styled from "styled-components"
import Leaf_1 from "./img/leaf.svg"
import Leaf_2 from "./img/leaf-2.svg"
import Leaf_3 from "./img/leaf-3.svg"
import Moon from "./img/moon.svg"
import Rock_1 from "./img/rock-1.svg"
import Rock_2 from "./img/rock-2.svg"
import Rock_3 from "./img/rock-3.svg"
import Rock_4 from "./img/rock-4.svg"
import Fire from "./img/fire.svg"
import FireWood from "./img/firewood.svg"
import Mouse from "./img/mouse.svg"

export default function Loader() {

  const [isLoading, setIsLoading] = useState(true);
  const darkMode  = useRecoilValue(DarkModeAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      setIsLoading(true);
    };
  });

  return (
    <LoaderStyle>
      {isLoading && <div className="loader">
        <div>
          <Circle darkMode={darkMode}></Circle>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="cover"></div>

          <div className="eye-1"></div>
          <div className="eye-2"></div>
          <div className="mouse"></div>
          <div className="balltouch-1"></div>
          <div className="balltouch-2"></div>
          <div className="leaf"></div>

          <div className="wood-1"></div>
          <div className="leaf-1-1"></div>
          <div className="leaf-1-2"></div>

          <div className="wood-2"></div>
          <div className="leaf-2-1"></div>
          <div className="leaf-2-2"></div>

          <div className="wood-3"></div>
          <div className="leaf-3-1"></div>
          <div className="leaf-3-2"></div>

          <div className="moon"></div>

          <div className="rock-1"></div>
          <div className="rock-2"></div>
          <div className="rock-3"></div>
          <div className="rock-4"></div>
          <div className="rock-5"></div>
          <div className="rock-6"></div>
          <div className="rock-7"></div>

          <div className="firewood"></div>
          <div className="fire"></div>

          <div className="face"></div>
        </div>
        <span className="loader-text">Loading...</span>
      </div>}
    </LoaderStyle>
  )
}

const Circle = styled.div`
  position: absolute;
  left: 70px;
  top: 60%;
  transform: translate(-50%, -50%) scale(0);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background-color: ; */
  background-color: ${({darkMode}) => (darkMode) ? 'rgb(229, 214, 174)' : ''};
  /* filter: blur(3px); */
  animation: circle .3s ease forwards;
`;

const LoaderStyle = styled.div`
  width: 100%;
  /* height: (var(--screen-nav-height) - 110px); */
  height: var(--screen-nav-height);
  padding: 0 130px;
  position: relative;


.loader {
  position: absolute;
  left: 80%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 110px;
  position: relative;
}

.loader-text {
  position: absolute;
  left: -20px;
  bottom: -10px;
  color: #3F434D;
  animation: text 2s ease forwards;
  font-size: 0.02rem;
  letter-spacing: 1px;
}

.bar-1 {
  background-color: #72706E;
  border-radius: 50px;
  width: 5px;
  height: 0px;
  bottom: 0;
  left: 0;
  z-index: 11;
  position: absolute;
  transform: rotate(30deg);
  animation: bar-1 .5s ease forwards;

}

.bar-2 {
  background-color: #72706E;
  border-radius: 50px;
  width: 5px;
  height: 0px;
  bottom: 0;
  left: 35px;
  z-index: 11;
  position: absolute;
  transform: rotate(-30deg);
  /* animation: loading_2 1s ease both infinite; */
  animation: bar-2 .5s ease forwards;
  
}

.cover {
  background-color: #3F434D;
  position: absolute;
  left: 40px;
  bottom: 10px;
  width: 0px;
  height: 72px;
  z-index: 10;
  border-radius: 5px;
  transform: skewX(30deg);
  animation: cover .5s ease forwards;
  animation-delay: .3s;
}

.face {
  background-color: #fff;
  position: absolute;
  left: 0px;
  bottom: 10px;
  width: 100px;
  height: 0px;
  border-radius: 5px;
  transform: skewX(-30deg);
  animation: face .5s ease forwards;
  animation-delay: .4s;
}

.eye-1 {
  background-color: #000;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 5px;
  bottom: 35px;
  z-index: 12;
  border-radius: 50%;
  transform: scale(0);
  animation: eye .5s ease forwards;
  animation-delay: .6s;
}

.eye-2 {
  background-color: #000;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 25px;
  bottom: 35px;
  z-index: 12;
  border-radius: 50%;
  transform: scale(0);
  animation: eye .5s ease forwards;
  animation-delay: .6s;
}

.mouse {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 15px;
  bottom: 19px;
  z-index: 12;
  background: url(${Mouse}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: Mouse .5s ease forwards;
  animation-delay: .7s;
}

.balltouch-1 {
  background-color: #FFB199;
  position: absolute;
  width: 12px;
  height: 8px;
  left: -5px;
  bottom: 20px;
  z-index: 12;
  border-radius: 50%;
  transform: scale(0);
  animation: balltouch .5s ease forwards; 
  animation-delay: .8s;
}

.balltouch-2 {
  background-color: #FFB199;
  position: absolute;
  width: 12px;
  height: 8px;
  left: 30px;
  bottom: 20px;
  z-index: 12;
  border-radius: 50%;
  transform: scale(0);
  animation: balltouch .5s ease forwards; 
  animation-delay: .8s;
}

.wood-1 {
  position: absolute;
  width: 8px;
  left: 64px;
  bottom: 23px;
  z-index: 13;
  background-color: #4E3939;
  transform: scale(0) rotate(-16deg);
  animation: wood .5s ease forwards; 
  animation-delay: .3s;
}

.leaf-1-1{
  width: 25px;
  height: 25px;
  position: absolute;
  left: 53px;
  bottom: 30px;
  z-index: 13;
  background: url(${Leaf_1}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .4s;
}

.leaf-1-2{
  width: 25px;
  height: 25px;
  position: absolute;
  left: 50px;
  bottom: 40px;
  z-index: 13;
  background: url(${Leaf_1}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .5s;
}

.wood-2 {
  width: 6px;
  height: 13px;
  position: absolute;
  left: 87px;
  bottom: 30px;
  z-index: 12;
  background-color: #4E3939;
  transform: scale(0) rotate(-16deg);
  animation: wood .5s ease forwards; 
  animation-delay: .5s;
}

.leaf-2-1{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 78px;
  bottom: 40px;
  z-index: 13;
  background: url(${Leaf_3}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .6s;
}

.leaf-2-2{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 75px;
  bottom: 50px;
  z-index: 13;
  background: url(${Leaf_3}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .7s;
}

.wood-3 {
  width: 6px;
  height: 13px;
  position: absolute;
  left: 80px;
  bottom: 25px;
  z-index: 12;
  background-color: #4E3939;
  transform: scale(0) rotate(-16deg);
  animation: wood .5s ease forwards; 
  animation-delay: .4s;
}

.leaf-3-1{
  width: 15px;
  height: 15px;
  position: absolute;
  left: 75px;
  bottom: 31px;
  z-index: 13;
  background: url(${Leaf_2}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .5s;
}

.leaf-3-2{
  width: 15px;
  height: 15px;
  position: absolute;
  left: 72px;
  bottom: 40px;
  z-index: 13;
  background: url(${Leaf_2}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: leaf .5s ease forwards; 
  animation-delay: .6s;
}

.moon{
  width: 25px;
  height: 25px;
  position: absolute;
  right: 77px;
  top: 30px;
  z-index: 14;
  background: url(${Moon}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: moon 1s ease forwards; 
  animation-delay: 1s;
}

.rock-1{
  width: 10px;
  height: 10px;
  position: absolute;
  right: 95px;
  bottom: 15px;
  z-index: 15;
  background: url(${Rock_1}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: rock .5s ease forwards; 
  animation-delay: .4s;
}
.rock-2{
  width: 10px;
  height: 10px;
  position: absolute;
  right: 90px;
  bottom: 23px;
  z-index: 15;
  background: url(${Rock_2}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: rock .5s ease forwards; 
  animation-delay: .5s;
}
.rock-3{
  width: 8px;
  height: 8px;
  position: absolute;
  right: 85px;
  bottom: 29px;
  z-index: 15;
  background: url(${Rock_3}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: rock .5s ease forwards; 
  animation-delay: .6s;
}

.rock-4{
  width: 8px;
  height: 8px;
  position: absolute;
  right: 78px;
  bottom: 32px;
  z-index: 15;
  background: url(${Rock_4}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: rock .5s ease forwards; 
  animation-delay: .7s;
}

.rock-5 {
  width: 8px;
  height: 8px;
  position: absolute;
  right: 71px;
  bottom: 34px;
  z-index: 15;
  background: url(${Rock_4}) no-repeat center center;
  background-size: contain;
  transform: scale(0) rotate(20deg); 
  animation: rock-5 .5s ease forwards;
  animation-delay: .8s;
}

.rock-6{
  width: 11px;
  height: 11px;
  position: absolute;
  right: 61px;
  bottom: 32px;
  z-index: 15;
  background: url(${Rock_4}) no-repeat center center;
  background-size: contain;
  transform: scale(0) rotate(40deg); 
  animation: rock-6 .5s ease forwards; 
  animation-delay: .9s;
}

.rock-7{
  width: 7px;
  height: 7px;
  position: absolute;
  right: 56px;
  bottom: 31px;
  z-index: 15;
  background: url(${Rock_4}) no-repeat center center;
  background-size: contain;
  transform: scale(0) rotate(60deg); 
  animation: rock-7 .5s ease forwards; 
  animation-delay: 1s;
} 

.firewood{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 63px;
  bottom: 10px;
  z-index: 16;
  background: url(${FireWood}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: fire .5s ease forwards; 
  animation-delay: .6s;
}

.fire {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 68px;
  bottom: 22px;
  z-index: 17;
  background: url(${Fire}) no-repeat center center;
  background-size: contain;
  transform: scale(0);
  animation: fire .5s ease forwards; 
  animation-delay: .8s;
}

@keyframes circle {
  100% {
    transform: translate(-50%, -50%) scale(2);
  }
}

@keyframes text {
  0% {
    letter-spacing: 1px;
  }
  50% {
    letter-spacing: 15px;
  }
  100% {
    letter-spacing: 1px;
  }
}

@keyframes bar-1 {
  100% {
    height: 100px;
    transform: rotate(30deg);
  }
}

@keyframes bar-2 {
  100% {
    height: 100px;
    transform: rotate(-30deg);
  }
}

@keyframes cover {
  100% {
    width: 100px;
    transform: skewX(30deg);
  }
}

@keyframes face {
  100% {
    height: 72px;
    transform: skewX(-30deg);
  }
}

@keyframes balltouch {
  100% {
    transform: scale(1);
  }
}

@keyframes Mouse {
  100% {
    transform: scale(1);
  }
}

@keyframes eye {
  100% {
    transform: scale(1);
  }
}

@keyframes wood {
  100% {
    height: 13px;
    transform: scale(1) rotate(-16deg);
  }
} 

@keyframes leaf {
  100% {
    transform: scale(1);
  }
}

@keyframes moon {
  100% {
    transform: scale(1) rotate(720deg);
  }
}

@keyframes rock {
  100% {
    transform: scale(1);
  }
}

@keyframes rock-5 {
  100% {
    transform: scale(1) rotate(20deg); 
  }
}

@keyframes rock-6 {
  100% {
    transform: scale(1) rotate(40deg); 
  }
};

@keyframes rock-7 {
  100% {
    transform: scale(1) rotate(60deg); 
  }
};

@keyframes fire {
  100% {
    transform: scale(1);
  }
}
`;
