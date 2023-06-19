import useImageUploader from '../hooks/useImageUploader';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../recoil/AtomUserState';
import { editPost } from '../api/postAPI';
import PostUpload from '../api/PostUpload';
import styled from 'styled-components';

import UploadHeader from '../components/header/UploadHeader';
import { ProfileMd } from '../components/common/Profile';
import { FileUploadMd } from '../components/common/FileUpload'

export default function UploadPage() {
  const { handleImageChange, imageURL, imagePath } = useImageUploader();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom)

  const locationValue = location.state;
  const [text, setText] = useState(locationValue?.content || '');
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    if (newText) {
      setValid(true)
    } else {
      setValid(false)
    }
  };
  console.log(!!imageURL);
  console.log(!!locationValue?.image);

  const handleUploadBtnClick = async () => {
    if (location.pathname === '/upload') {
      await PostUpload(text, imagePath);
      navigate(-1);
    } else if (location.pathname === '/editpost') {
      await editPost(locationValue.id, text, imagePath || locationValue?.image);
      navigate(-1);
    }
  };

  const autoResize = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  return (
    <>
      <UploadPageStyle>
        <h1 className='a11y-hidden'>게시물 업로드</h1>
        <UploadHeader valid={valid} contents={'업로드'} handleUploadBtnClick={handleUploadBtnClick} />

        <PostWrapperStyle>
          <ProfileMd url={userInfo.image} />
          <div className='uploading'>
            <textarea
              onChange={handleChange}
              value={text}
              name='uploading-post'
              id='uploading-post'
              placeholder='여러분의 캠핑을 기록해 주세요'
              onInput={autoResize}
            />
            {imageURL || locationValue?.image ? (
              <img src={imageURL || locationValue?.image} alt="" className="showImg" />
            ) : null}
            <div className='uploadImgBtn'>
              <FileUploadMd id={'uploading-img'} onChange={handleImageChange} />
            </div>
          </div>
        </PostWrapperStyle>
      </UploadPageStyle>
    </>
  );
}

const UploadPageStyle = styled.section`
  position: relative;
  height: var(--basic-height);
  overflow-y: auto;
  overflow-x: hidden;

  .uploadImgBtn {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`;

const PostWrapperStyle = styled.article`
  display: flex;
  margin: 20px 10px;
  max-height: 696px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
      background-color: var(--background-color)
  } 

  .uploading {
    margin: 12px 0 0 12px;
    textarea {
      font-family: 'Noto Sans KR', sans-serif;
      width: 308px;
      min-height: 80px;
      /* max-height: ; */
      resize: none;
      overflow: hidden;
      border: none;
      outline: none;
      resize: none;
      background-color: transparent;
      font-size: var(--font--size-md);
      text-align: justify;
      ::placeholder {
        color: var(--basic-color-7);
      }
    }
    .showImg {
      width: 304px;
      height: 228px;
      margin-top: 15px;
      border-radius: 10px;
      border: 0.5px solid var(--basic-color-8);
    }
  }
`