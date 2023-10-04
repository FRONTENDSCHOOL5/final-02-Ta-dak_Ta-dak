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
import imageCompression from 'browser-image-compression';

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

  // 파일 선택을 통해 이미지를 업로드하면 실행되는 함수
  const handleImage = async (e) => {
    // 첫번째 파일
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 220,
      // 웹워커 사용하여 이미지 압축 수행할지 여부
      // 백그라운드 스레드 작업을 수행하여 메인 성능에 영향을 미치지 않음 (더 효율적인 처리) 
      useWebWorker: true,
    };

    try {
      // 압축된 이미지 compressedImg에 저장
      const compressedImg = await imageCompression(file, options);
      console.log('압축된 이미지 크기 :', compressedImg.size);

      // Blob 객체를 File 객체로 변환하여 formData에 추가
      const compressedFile = new File([compressedImg], file.name);
      const formData = new FormData();
      // 압축된 이미지를 파일로 변환 후 formData에 추가
      formData.append("image", compressedFile);

      // 'uploadImageToServer' 함수를 호출하여 이미지를 서버로 업로드
      const imgData = await uploadImageToServer(formData);
      console.log(imgData);
    } catch (error) {
      console.error('이미지 압축 및 업로드 중 오류 발생:', error);
    }
  };

  // formData에 담긴 이미지를 서버로 업로드
  const uploadImageToServer = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imgData = await response.json();
        return imgData;
      } else {
        console.error('이미지 업로드 실패');
        return null;
      }
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
      return null;
    }
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
        <h1 className="a11y-hidden">게시물 업로드</h1>
        <UploadHeader
          valid={valid}
          contents={'업로드'}
          handleUploadBtnClick={handleUploadBtnClick}
        />
      <UploadPageStyle>

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
                alt="게시글 이미지"
                className="showImg"
              />
            ) : null}
            
            <div className="uploadImgBtn">
              <FileUploadMd id={'uploading-img'} onChange={handleImage} aria-label="FileInput" />
              {/* <FileUploadMd id={'uploading-img'} onChange={handleImageChange} aria-label="FileInput" /> */}
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
  height: var(--screen-height);
  overflow: hidden;

  @media (min-width: 768px) {
    height: calc(var(--screen-height) - 48px);
  }

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
    width: 0px;
    background-color: var(--background-color);
  }

  @media (min-width: 768px) {
    margin: 0px 10px 20px 10px;
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
      @media (min-width: 768px) {
        width: 420px;
      }
    }
    .showImg {
      width: 304px;
      aspect-ratio: 304/228;
      margin-top: 15px;
      border-radius: 10px;
      border: 0.5px solid var(--basic-color-6);
      @media (min-width: 768px) {
        width: 404px;
      }
    }
  }
`;
