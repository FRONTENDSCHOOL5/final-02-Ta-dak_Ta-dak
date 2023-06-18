import styled from 'styled-components';

import { ProfileLg } from './Profile';

import IconUploadLg from '../../assets/img/upload-file.svg'
import IconUploadMd from '../../assets/img/s-upload-file.svg'
import IconUploadSm from '../../assets/img/s-upload-file.svg'

// 프로필+사진파일추가 110*110 (36*36)   
export function FileUploadLg(props) {
  return (
    <>
      <FileLgLabelStyle htmlFor={props.id}>
        <ProfileLg url={props.url} />
      </FileLgLabelStyle>
      <FileInputStyle {...props} id={props.id} type='file'></FileInputStyle>
    </>
  ); 
}

// 사진파일추가 36*36  => 50*50
export function FileUploadMd(props) {
  return (
    <>
      <FileMdLabelStyle htmlFor={props.id}></FileMdLabelStyle>
      <FileInputStyle {...props} id={props.id} type='file'></FileInputStyle>
    </>
  );
}

// 사진파일추가 50*50  => 36*36
export function FileUploadSm(props) {
  return (
    <>
      <FileSmLabelStyle htmlFor={props.id}></FileSmLabelStyle>
      <FileInputStyle {...props} id={props.id} type='file'></FileInputStyle>
    </>
  );
}

const FileLgLabelStyle = styled.label`
  display: inline-block;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    background: url(${IconUploadSm}) no-repeat center / auto 100%;
    cursor: pointer;
  }
`;

const FileMdLabelStyle = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: url(${IconUploadMd}) no-repeat center / auto 100%;
`;

const FileSmLabelStyle = styled.label`
  display: inline-block;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: url(${IconUploadSm}) no-repeat center / auto 100%;
`;

const FileInputStyle = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;