import { useRef } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { deleteProduct } from '../../api/productAPI';
import useAlertControl from '../../hooks/useAlertControl';
import styled, { keyframes } from 'styled-components';

import Alert from './Alert';
import { ReactComponent as Xbutton } from '../../assets/img/x.svg';
import { ReactComponent as Garland } from '../../assets/img/garland.svg';

export default function ProductDetailModal({ saleItem, setIsModalOpen }) {
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedId = (location.pathname.split('/'))[2];

  const productDetailModalRef = useRef(null);
  const handleBackgroundClick = (event) => {
    // 클릭한 대상이 컴포넌트 내부가 아닌지 확인
    if (
      productDetailModalRef.current &&
      !productDetailModalRef.current.contains(event.target)
    ) {
      setIsModalOpen(false);
    }
  };

  const handleGoAddproduct = () => {
    navigate('/editproduct', {
      state: {
        saleItem,
      },
    });
  };

  const handleDeleteReq = async (event) => {
    if (event.target.textContent === '확인') {
    await deleteProduct(saleItem.id);
    window.location.reload();
    }
  };

  return (
    <>
      <BackgorundStyle onClick={handleBackgroundClick}>
        <ProductDtailModalStyle ref={productDetailModalRef}>
          <XbuttonStyle>
            <Xbutton onClick={() => setIsModalOpen(false)} />
          </XbuttonStyle>
          <GarlandStyle></GarlandStyle>
          <img src={saleItem.itemImage} alt={saleItem.itemName} />
          <h2>{saleItem.itemName}</h2>
          <h3>{saleItem.price.toLocaleString()}원</h3>
          <p>상품 설명 혹은 링크</p>
          <pre>{saleItem.link}</pre>
          {selectedId === JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname && (
            <>
              <button className="modifyBtn" onClick={handleGoAddproduct}>
                수정
              </button>
              <button className="deleteBtn" onClick={openAlert}> 삭제</button>
            </>
          )}
        </ProductDtailModalStyle>
      </BackgorundStyle>
      <AlertComponent>
        <Alert alertMsg={'삭제하시겠습니까?'} choice={['취소','확인']} handleFunc={handleDeleteReq}/>
      </AlertComponent>

    </>
  );
}

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const BackgorundStyle = styled.div`
  width : var(--basic-width);
  height: var(--basic-height);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--modal-blur-color);
  backdrop-filter: blur(2px);
  animation: ${fadeIn} 0.3s ease-in;
  cursor: pointer;
  /* 팔로우 추천 프로필 이미지 배경 위에 나타나는 것 방지 */
  z-index: 2;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const ProductDtailModalStyle = styled.div`
  position: relative;
  width: 303px;
  height: 458px;
  background-color: var(--modal-background-color);
  border-radius: 20px;
  margin: calc((var(--basic-height) - 458px) / 2) auto;
  padding: 50px 34px 20px 34px;
  cursor: auto;

  img {
    display: block;
    width: 235px;
    height: 153px;
    margin: 0 auto;
    z-index: 1;
    object-fit: cover;
  }

  h2 {
    font-size: var(--font--size-lg);
    font-weight: 500;
    margin-top: 12px;
    color: var(--common-text-color-2);
  }

  h3 {
    font-size: var(--font--size-md);
    font-weight: var(--font--Bold);
    color: var(--basic-color-5);
    margin-top: 6px;
    line-height: 19px;
  }

  p {
    font-size: var(--font--size-sm);
    margin-top: 7px;
    line-height: 16px;
    color: var(--common-text-color-2);
  }

  pre {
    min-width: 241px;
    width: 100%;
    height: 110px;
    margin-top: 5px;
    font-weight: var(--font--Regular);
    font-size: var(--font--size-sm);
    line-height: 18px;
    padding: 10px 8px;
    word-break: break-all;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: var(--basic-color-4);
    color: var(--common-text-color-2);
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ada3a344; /* 썸네일의 배경색 */
      border-radius: 2px; /* 썸네일의 모서리 반경 */
    }
  }

  .modifyBtn {
    width: 75px;
    height: 35px;
    font-size: var(--font--size-md);
    background-color: #b9d6a3;
    border-radius: 25px;
    position: absolute;
    right: 112px;
    bottom: 22px;
  }

  .deleteBtn {
    width: 75px;
    height: 35px;
    font-size: var(--font--size-md);
    background-color: #f6cece;
    border-radius: 25px;
    position: absolute;
    right: 32px;
    bottom: 22px;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 600px;
    padding: 50px 44px 20px 44px;
    margin: calc((var(--basic-height) - 600px) / 2) auto;

    img {
      width: 308px;
      height: 200px;
    }

    h2 {
      margin-top: 16px;
    }

    pre {
      height: 166px;
    }
    .modifyBtn {
      width: 100px;
      height: 47px;
      right: 138px;
      bottom: 22px;
    }

    .deleteBtn {
      width: 100px;
      height: 47px;
      right: 32px;
      bottom: 22px;
    }
  }
`;

const XbuttonStyle = styled.button`
  display: block;
  padding: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const GarlandStyle = styled(Garland)`
  position: absolute;
  top: -12px;
  left: 0;
  z-index: 3;
`;
