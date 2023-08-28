import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "../recoil/AtomDarkModeState";
import sun from "../assets/img/sun.svg"
import styled from "styled-components";

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
    <>
      {!hideBtn &&
      <DarkModeBtnStyle>
        <label className="switch" htmlFor="darkModeSwitch">
          {darkMode ? <input type="checkbox" id="darkModeSwitch" aria-label="DarkModeSwitch" onChange={handleMode} checked={false}/> :
          <input type="checkbox" id="darkModeSwitch" aria-label="DarkModeSwitch" onChange={handleMode} checked={true}/>}
          <span className="slider"></span>
        </label>
      </DarkModeBtnStyle>
      }
    </>
  )
}

const DarkModeBtnStyle = styled.button`

.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
}

.switch #darkModeSwitch {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  cursor: pointer;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 0;
  box-shadow: inset 8px -4px 0px 0px #FCFBF3;
  transition: .5s;
}

input:checked + .slider:before {
  transform: rotate(180deg);
  box-shadow: inset 15px -4px 0px 15px rgb(254, 255, 225, 0.0);
  background: url(${sun}) no-repeat center / auto 100%;
}
`;

