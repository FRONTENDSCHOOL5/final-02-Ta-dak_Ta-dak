import styled from 'styled-components';

export function GreenLgBtn({ contents }) {
  return <GreenLgBtnStyle>{contents}</GreenLgBtnStyle>;
}

export function GreenMdBtn({ contents }) {
  return <GreenMdBtnStyle>{contents}</GreenMdBtnStyle>;
}

export function GreenMsBtn({ contents }) {
  return <GreenMsBtnStyle>{contents}</GreenMsBtnStyle>;
}

export function GreenSmBtn({ contents }) {
  return <GreenSmBtnStyle>{contents}</GreenSmBtnStyle>;
}

export function BoldLgBtn({ contents }) {
  return <BoldLgBtnStyle>{contents}</BoldLgBtnStyle>;
}

export function BoldMdBtn({ contents }) {
  return <BoldMdBtnStyle>{contents}</BoldMdBtnStyle>;
}

export function BoldMsBtn({ contents, onClickHandler }) {
  return <BoldMsBtnStyle onClick={onClickHandler}>{contents}</BoldMsBtnStyle>;
}

export function BoldSmBtn({ contents }) {
  return <BoldSmBtnStyle>{contents}</BoldSmBtnStyle>;
}

export function WhiteLgBtn({ contents }) {
  return <WhiteLgBtnStyle>{contents}</WhiteLgBtnStyle>;
}

export function WhiteMdBtn({ contents }) {
  return <WhiteMdBtnStyle>{contents}</WhiteMdBtnStyle>;
}

export function WhiteMsBtn({ contents }) {
  return <WhiteMsBtnStyle>{contents}</WhiteMsBtnStyle>;
}

export function WhiteSmBtn({ contents }) {
  return <WhiteSmBtnStyle>{contents}</WhiteSmBtnStyle>;
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

const GreenLgBtnStyle = styled.button`
  width: 322px;
  height: 44px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 44px;
`;

const GreenMdBtnStyle = styled.button`
  width: 120px;
  height: 34px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 30px;
`;

const GreenMsBtnStyle = styled.button`
  width: 90px;
  height: 32px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-2);
  border-radius: 30px;
`;

const GreenSmBtnStyle = styled.button`
  width: 56px;
  height: 28px;
  font-size: var(--font--size-sm);
  background-color: var(--basic-color-2);
  border-radius: 30px;
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
