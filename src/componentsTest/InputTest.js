// component/common/Input.jsx 테스트 위한 js파일 - 원영
import { FileUploadLg, FileUploadMd, FileUploadSm } from '../components/common/FileUpload';
import { Input } from '../components/common/Input';

export default function InputTest() {
  return (
    <>
      <Input id={'user-email'} type={'email'} label={'이메일'} />
      <Input id={'user-password'} type={'password'} label={'비밀번호'} />
      <Input id={'user-name'} type={'text'} label={'사용자 이름'} placeholder={'2~10자 이내여야 합니다.'} />

      <FileUploadLg id={'user-profile1'}/>
      <FileUploadMd id={'user-profile2'}/>
      <FileUploadSm id={'user-profile3'}/>
    </>
  );
}

