import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "../recoil/AtomDarkModeState";
import sun from "../assets/img/sun.svg"
import styled from "styled-components"

export default function DarkModeBtn() {

  const [darkMode, setDarkMode] = useRecoilState(DarkModeAtom)
  const location = useLocation();

  const handleMode = () => {
    setDarkMode(PrevValue => !PrevValue)
  }

  const hidePaths = [
    '/splash',
    '/login',
    '/signup',
    '/signup/profile'
  ];
  const hideBtn = hidePaths.includes(location.pathname);

  return (
    <DarkModeBtnContainer>
      {!hideBtn &&
      <DarkModeBtnStyle>
        <label className="switch">
          {darkMode ? <input type="checkbox" aria-label="DarkModeSwitch" onClick={handleMode}/> :
          <input type="checkbox" aria-label="DarkModeSwitch" onClick={handleMode} checked/>}
          <span class="slider"></span>
        </label>
      </DarkModeBtnStyle>
      }
    </DarkModeBtnContainer>
  )
}

const DarkModeBtnContainer = styled.div`  
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--basic-width);
  height: var(--basic-height);
  display: flex;
  align-items: flex-end; 
`;

const DarkModeBtnStyle = styled.button`
  pointer-events: auto;
  position: absolute;
  bottom: 120px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;

.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  --background: #75665D;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  transition: .5s;
}

input:checked + .slider {
  background-color: #B9D6A3;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px rgb(254, 255, 225, 0.0);
  background: url(${sun}) no-repeat center / auto 100%;
}
`;