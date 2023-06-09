import styled from 'styled-components';

// 유저 정보 저장하는 state 전역으로 관리해서 <input>에 value, onChange 설정해주기

export function Input({ inputId, type, label, placeHolder }) {
  return (
    <>
      <InputContainerStyle>
        <LabelStyle htmlFor={inputId}>{label}</LabelStyle>
        <InputStyle type={type} id={inputId} name={inputId} placeholder={placeHolder} autoComplete='off'></InputStyle>
      </InputContainerStyle>
    </>
  );
}

const InputContainerStyle = styled.div`
  width: 322px;
  background-color: #ffffff;
  margin-bottom: 16px;
`;

const LabelStyle = styled.label`
  display: block;
  font-size: var(--font--size-sm);
  color: var(--label-font-color);
  line-height: 15px;
  margin-bottom: 10px;
`;

const InputStyle = styled.input`
  ::placeholder {
    color: var(--border-light-color);
    font-size: var(--font--size-md);
  }
  width: 100%;
  font-size: var(--font--size-md);
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid var(--border-light-color);
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--input-active-btn-color);
  }
`;
