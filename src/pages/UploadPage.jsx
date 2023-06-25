import useImageUploader from '../hooks/useImageUploader';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import useAlertControl from '../hooks/useAlertControl';
import { UserAtom } from '../recoil/AtomUserState';
import { editPost } from '../api/postAPI';
import { uploadImage } from '../api/uploadimgAPI';
import styled from 'styled-components';

import UploadHeader from '../components/header/UploadHeader';
import { ProfileMd } from '../components/common/Profile';
import { FileUploadMd } from '../components/common/FileUpload';
import Alert from '../components/common/Alert';

export default function UploadPage() {
  const { handleImageChange, imageURL, imagePath, uploadValidity } =
    useImageUploader();
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const locationValue = location.state;
  const [text, setText] = useState(locationValue?.content || '');
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setValid(!!newText);
  };

  const handleUploadBtnClick = async () => {
    if (location.pathname === '/upload') {
      const uploadPost = await uploadImage(text, imagePath || '');
      navigate(`/profile/${uploadPost.post.author.accountname}`);
    } else if (location.pathname === '/editpost') {
      await editPost(locationValue.id, text, imagePath || locationValue?.image);
      navigate(-1);
    }
  };

  useEffect(() => {
    if (uploadValidity === '유효하지 않은 파일') {
      openAlert();
    }
    else if (location.pathname === '/editpost') {
      setValid(true);
    }
  }, [uploadValidity, location.pathname]);

  const autoResize = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>
      <UploadPageStyle>
        <h1 className="a11y-hidden">게시물 업로드</h1>
        <UploadHeader
          valid={valid}
          contents={'업로드'}
          handleUploadBtnClick={handleUploadBtnClick}
        />

        <PostWrapperStyle>
          <ProfileMd url={userInfo.image} />
          <div className="uploading">
            <textarea
              onChange={handleChange}
              value={text}
              name="uploading-post"
              id="uploading-post"
              placeholder="여러분의 캠핑을 기록해 주세요"
              onInput={autoResize}
            />
            {imageURL || locationValue?.image ? (
              <img
                src={imageURL || locationValue?.image}
                alt=""
                className="showImg"
              />
            ) : null}
            <div className="uploadImgBtn">
              <FileUploadMd id={'uploading-img'} onChange={handleImageChange} />
            </div>
          </div>
        </PostWrapperStyle>
      </UploadPageStyle>
      <AlertComponent>
        <Alert alertMsg={'잘못된 업로드입니다.'} choice={['확인']} />
      </AlertComponent>
    </>
  );
}

const UploadPageStyle = styled.section`
  position: relative;
  height: var(--basic-height);
  overflow: hidden;

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
    background-color: var(--background-color);
  }

  .uploading {
    margin: 12px 0 0 12px;
    textarea {
      font-family: 'Noto Sans KR', sans-serif;
      width: 308px;
      min-height: 80px;
      resize: none;
      overflow: hidden;
      border: none;
      outline: none;
      resize: none;
      background-color: transparent;
      font-size: var(--font--size-md);
      text-align: justify;
      color: var(--text-color-1);
      ::placeholder {
        color: var(--text-color-2);
      }
    }
    .showImg {
      width: 304px;
      height: 228px;
      margin-top: 15px;
      border-radius: 10px;
      border: 0.5px solid var(--basic-color-6);
    }
  }
`;
