// component/common/Input.jsx 테스트 위한 js파일 - 원영
import React from 'react';
import { Input } from '../components/common/Input';

export default function InputTest() {
  return (
    <>
      <Input inputId={'user-email'} type={'email'} label={'이메일'} />
      <Input inputId={'user-password'} type={'password'} label={'비밀번호'} />
      <Input inputId={'user-name'} type={'text'} label={'사용자 이름'} placeHolder={'2~10자 이내여야 합니다.'}
      />
    </>
  );
}

