import styled from 'styled-components';

export function Input(props) {

  return (
    <>
      <InputContainerStyle>
        <div>
          <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
          <InputStyle {...props} autoComplete='off'></InputStyle>
        </div>
        {
          // 유효성 검사 통과할 경우 &&
          props.valid &&
          <ValidationSuccessStyle>{props.alertMsg}</ValidationSuccessStyle>
        }
        {
          // 유효성 검사 통과 못할 경우 &&
          !props.valid &&
          <ValidationErrorStyle>{props.alertMsg}</ValidationErrorStyle>
        }
      </InputContainerStyle>
    </>
  );
}

const InputContainerStyle = styled.div`
  width: 322px;
  margin-bottom: 16px;
  div {
    background-color: var(--basic-color-4);
  }
`;

const LabelStyle = styled.label`
  display: block;
  font-size: var(--font--size-sm);
  line-height: 15px;
  margin-bottom: 10px;
  color: var(--common-text-color-2);
`;

const InputStyle = styled.input`
  background-color: transparent;
  width: 100%;
  font-size: var(--font--size-md);
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.valid ? 'var(--basic-color-6)' : '#eb5757')};
  color: var(--common-text-color-2);

  ::placeholder {
    color: var(--text-color-2);
    font-size: var(--font--size-md);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => (props.valid ? 'var(--basic-color-5)' : '#eb5757')};
  }
`;

const ValidationSuccessStyle = styled.span`
  display: block;
  font-size: var(--font--size-sm);
  line-height: 14px;
  color: var(--basic-color-5);
  margin-top: 6px;
`;

const ValidationErrorStyle = styled(ValidationSuccessStyle)`
  color: #eb5757;
`;