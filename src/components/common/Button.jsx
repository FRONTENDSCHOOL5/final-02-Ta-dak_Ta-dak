import styled from 'styled-components';

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

const YellowBtnStyle = styled.button`
  width: 120px;
  height: 41px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-1);
  border-radius: 44px;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s;
  &:hover {
    background-color: var(--basic-color-2);
  }
`;

const GreenLgBtnStyle = styled.button`
  width: 322px;
  height: 44px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 44px;
  transition: .3s;
`;

const GreenMdBtnStyle = styled.button`
  width: 120px;
  height: 34px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 30px;
  transition: .3s;
`;

const GreenMsBtnStyle = styled.button`
  width: 90px;
  height: 32px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 30px;
  transition: .3s;
`;

const GreenSmBtnStyle = styled.button`
  width: 56px;
  height: 28px;
  font-size: var(--font--size-sm);
  background-color: var(--basic-color-2);
  border-radius: 30px;
  transition: .3s;
`;

const BoldLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: var(--basic-color-3);
  color: #fcfbf3;
`;

const BoldMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: var(--basic-color-3);
  color: #fcfbf3;
`;

const BoldMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: var(--basic-color-3);
  color: #fcfbf3;
`;

const BoldSmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: var(--basic-color-3);
  color: #fcfbf3;
`;

const WhiteLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: #fff;
  color: var(--basic-color-7);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-8);
`;

const WhiteMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: #fff;
  color: var(--basic-color-7);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-8);
`;

const WhiteMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: #fff;
  color: var(--basic-color-7);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-8);
`;

const WhiteSmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: #fff;
  color: var(--basic-color-7);
  box-shadow: inset 0px 0px 0px 0.7px var(--basic-color-8);
`;

const GreyLgBtnStyle = styled(GreenLgBtnStyle)`
  background-color: var(--basic-color-6);
  color: var(--basic-color-5);
  cursor: default;
`;

const GreyMdBtnStyle = styled(GreenMdBtnStyle)`
  background-color: var(--basic-color-6);
  color: var(--basic-color-5);
  cursor: default;
`;

const GreyMsBtnStyle = styled(GreenMsBtnStyle)`
  background-color: var(--basic-color-6);
  color: var(--basic-color-5);
  cursor: default;
`;

const GreySmBtnStyle = styled(GreenSmBtnStyle)`
  background-color: var(--basic-color-6);
  color: var(--basic-color-5);
  cursor: default;
`;