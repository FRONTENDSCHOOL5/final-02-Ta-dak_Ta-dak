import styled from 'styled-components';
import Top from '../../assets/img/Top.png';

export function GreenLgBtn({ contents, handleFunc }) {
  return <GreenLgBtnStyle onClick={handleFunc}>{contents}</GreenLgBtnStyle>;
}

export function GreenMdBtn({ contents, handleFunc }) {
  return <GreenMdBtnStyle onClick={handleFunc}>{contents}</GreenMdBtnStyle>;
}

export function GreenMsBtn({ contents, handleFunc }) {
  return <GreenMsBtnStyle onClick={handleFunc}>{contents}</GreenMsBtnStyle>;
}

export function GreenSmBtn({ contents, handleFunc }) {
  return <GreenSmBtnStyle onClick={handleFunc}>{contents}</GreenSmBtnStyle>;
}

export function GreenBackBtn({ contents, handleFunc }) {
  return <GreenBackBtnStyle onClick={handleFunc}>{contents}</GreenBackBtnStyle>;
}

export function BoldLgBtn({ contents, handleFunc }) {
  return <BoldLgBtnStyle onClick={handleFunc}>{contents}</BoldLgBtnStyle>;
}

export function BoldMdBtn({ contents, handleFunc }) {
  return <BoldMdBtnStyle onClick={handleFunc}>{contents}</BoldMdBtnStyle>;
}

export function BoldMsBtn({ contents, handleFunc }) {
  return <BoldMsBtnStyle onClick={handleFunc}>{contents}</BoldMsBtnStyle>;
}

export function BoldSmBtn({ contents, handleFunc }) {
  return <BoldSmBtnStyle onClick={handleFunc}>{contents}</BoldSmBtnStyle>;
}

export function WhiteLgBtn({ contents, handleFunc }) {
  return <WhiteLgBtnStyle onClick={handleFunc}>{contents}</WhiteLgBtnStyle>;
}

export function WhiteMdBtn({ contents, handleFunc }) {
  return <WhiteMdBtnStyle onClick={handleFunc}>{contents}</WhiteMdBtnStyle>;
}

export function WhiteMsBtn({ contents, handleFunc }) {
  return <WhiteMsBtnStyle onClick={handleFunc}>{contents}</WhiteMsBtnStyle>;
}

export function WhiteSmBtn({ contents, handleFunc }) {
  return <WhiteSmBtnStyle onClick={handleFunc}>{contents}</WhiteSmBtnStyle>;
}

export function GreyLgBtn({ contents }) {
  return <GreyLgBtnStyle disabled>{contents}</GreyLgBtnStyle>;
}

export function GreyMdBtn({ contents }) {
  return <GreyMdBtnStyle disabled>{contents}</GreyMdBtnStyle>;
}

export function GreyMsBtn({ contents }) {
  return <GreyMsBtnStyle disabled>{contents}</GreyMsBtnStyle>;
}

export function GreySmBtn({ contents }) {
  return <GreySmBtnStyle disabled>{contents}</GreySmBtnStyle>;
}

export function YellowBtn({ contents, handleFunc }) {
  return <YellowBtnStyle onClick={handleFunc}>{contents}</YellowBtnStyle>;
}

export function TopBtn({ handleFunc }) {
  return <TopBtnStyle onClick={handleFunc}></TopBtnStyle>;
}

const YellowBtnStyle = styled.button`
  width: 120px;
  height: 41px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-3);
  border-radius: 44px;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s;
  &:hover {
    background-color: var(--basic-btn-color);
  }
`;

const GreenLgBtnStyle = styled.button`
  width: 322px;
  height: 44px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color);
  color: var(--common-text-color-2);
  border-radius: 44px;
  transition: 0.3s;

  @media (min-width: 768px) {
    width: 500px;
    /* height: 48px; */
  }
`;

const GreenMdBtnStyle = styled.button`
  width: 120px;
  height: 34px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color);
  color: var(--common-text-color-2);
  border-radius: 30px;
  transition: 0.3s;

  @media (min-width: 768px) {
    width: 163px;
    height: 38px;
  }
`;

const GreenMsBtnStyle = styled.button`
  width: 90px;
  height: 32px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color);
  color: var(--common-text-color-2);
  border-radius: 30px;
  transition: .3s;
`;

const GreenSmBtnStyle = styled.button`
  width: 56px;
  height: 28px;
  font-size: var(--font--size-sm);
  background-color: var(--basic-btn-color);
  color: var(--common-text-color-2);
  border-radius: 30px;
  transition: .3s;
`;

const GreenBackBtnStyle = styled.button`
  width: 120px;
  height: 44px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color);
  color: var(--btn-text-color-1);
  border-radius: 30px;
`;

const BoldLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: var(--bold-btn-color);
  color: var(--btn-text-color-1);
`;

const BoldMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: var(--bold-btn-color);
  color: var(--btn-text-color-1);
`;

const BoldMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: var(--bold-btn-color);
  color: var(--btn-text-color-1);
`;

const BoldSmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: var(--bold-btn-color);
  color: var(--btn-text-color-1);
`;

const WhiteLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: #fff;
  color: var(--common-text-color-2);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-6);
`;

const WhiteMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: #ddd;
  color: var(--common-text-color-2);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-6);
`;

const WhiteMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: #fff;
  color: var(--common-text-color-2);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-6);
`;

const WhiteSmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: #fff;
  color: var(--common-text-color-2);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-6);
`;

const GreyLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: var(--disabled-btn-color);
  color: var(--btn-text-color-2);
  cursor: default;
`;

const GreyMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: var(--disabled-btn-color);
  color: var(--btn-text-color-2);
  cursor: default;
`;

const GreyMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: var(--disabled-btn-color);
  color: var(--btn-text-color-2);
  cursor: default;
`;

const GreySmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: var(--disabled-btn-color);
  color: var(--btn-text-color-2);
  cursor: default;
`;

const TopBtnStyle = styled.button`
  width: 50px;
  height: 50px;
  background: url(${Top}) no-repeat center center;
  border-radius: 50px;
`;