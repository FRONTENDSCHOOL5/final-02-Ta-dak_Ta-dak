import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteProduct } from '../../api/productAPI';
import useAlertControl from '../../hooks/useAlertControl';
import styled, { keyframes } from 'styled-components';

import Alert from './Alert';
import { ReactComponent as Xbutton } from '../../assets/img/x.svg';
import Product from '../../assets/img/product1.svg';
import { ReactComponent as Garland } from '../../assets/img/garland.svg';
import SaleItem from '../common/SaleItem';

export default function ProductDetailModal({ saleItem, setIsModalOpen }) {
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedId = location.pathname.replace('/profile/', '');

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
      <BackgorundStyle>
        <ProductDtailModalStyle>
          <XbuttonStyle>
            <Xbutton onClick={() => setIsModalOpen(false)} />
          </XbuttonStyle>
          <GarlandStyle></GarlandStyle>
          <img src={saleItem.itemImage} alt={saleItem.itemName} />
          <h2>{saleItem.itemName}</h2>
          <h3>{saleItem.price.toLocaleString()}원</h3>
          <p>상품 설명 혹은 링크</p>
          <div>{saleItem.link}</div>
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
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-in;

`;

const ProductDtailModalStyle = styled.div`
  /* border: 1px solid #dbdbdb; */
  position: relative;
  width: 303px;
  height: 458px;
  background-color: var(--background-color);
  border-radius: 20px;
  margin: 0 auto;
  top: 20vh;
  img {
    display: block;
    width: 235px;
    height: 153px;
    margin: 0 auto;
    position: relative;
    top: -85px;
    z-index: 1;
    object-fit: cover;
  }

  h2 {
    font-size: 15px;
    font-weight: 500;
    margin-left: 32px;
    margin-top: 12px;
    position: relative;
    top: -80px;
  }

  h3 {
    font-size: var(--font--size-md);
    font-weight: var(--font--Bold);
    color: var(--basic-color-4);
    margin-left: 32px;
    margin-top: 6px;
    line-height: 19px;
    position: relative;
    top: -80px;
  }

  p {
    font-size: var(--font--size-sm);
    margin-left: 32px;
    margin-top: 7px;
    line-height: 16px;
    position: relative;
    top: -80px;
  }

  div {
    position: relative;
    top: -80px;
    width: 241px;
    height: 110px;
    background-color: #ffffff;
    margin-left: 30px;
    margin-top: 5px;
    font-weight: var(--font--Regular);
    font-size: var(--font--size-sm);
    line-height: 18px;
    padding: 10px 8px;
    /* border: 1px solid #000; */
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
    background-color: var(--basic-color-2);
    border-radius: 25px;
    position: relative;
    left: 130px;
    top: -67px;
  }

  .deleteBtn {
    width: 75px;
    height: 35px;
    background-color: #f6cece;
    border-radius: 25px;
    position: relative;
    top: -67px;
    left: 140px;
  }
`;

const XbuttonStyle = styled.button`
  display: block;
  padding: 5px;
  position: relative;
  top: 10px;
  margin-left: 259px;
`;

const GarlandStyle = styled(Garland)`
  position: relative;
  top: -40px;
  z-index: 3;
`;
