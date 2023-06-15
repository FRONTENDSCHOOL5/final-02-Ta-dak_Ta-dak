import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components"

import { UploadHeader } from '../components/header/UploadHeader';
import { Input, FileInputMd } from '../components/common/Input';

export default function AddProductPage() {
  return (
    <>
    <AddProductPageStyle>
        <UploadHeader contents={'저장'}></UploadHeader>
    <span>이미지 등록</span>

    <div className='addImg'>
        <StyledFileInput>
            <FileInputMd></FileInputMd>
        </StyledFileInput>
    </div>
    <div className='inputProductInfo'>
    <Input id={'product-name'} type={'text'} label={'상품명'} placeholder={'2~15자 이내여야 합니다.'}/>
    <Input id={'product-price'} type={'text'} label={'가격'} placeholder={'숫자만 입력 가능합니다.'} />     
    </div>
    <span className='textAreaTitle'>상품 설명</span>
    <textarea name="productInfo" id="product-detail" cols="30" rows="10"></textarea>
    </AddProductPageStyle>
    </>
  )
}
const AddProductPageStyle = styled.div`
  width: var(--basic-width);
  height: var(--screen-width);;
  background-color:var(--background-color);
  margin: 0 auto;
  span {
    display: inline-block;
    font-size: var(--font--size-sm);
    margin-top: 16px;
    margin-left: 34px;
    margin-bottom: 36px
  }
  .addImg {
    width: 322px;
    height: 204px;
    background-color: var(--basic-color-8);
    border: 0.5px solid #DBDBDB;
    border-radius: 10px;
    margin: 0 34px;
  }
  .inputProductInfo {
    margin: 20px 34px;
  }
  
  label {
    color: #000;
  }
  .textAreaTitle {
    font-size: var(--font--size-sm);
    margin: 0;
    margin-left: 34px;
  }
  #product-detail {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(--font--size-sm);
    width: 322px;
    height: 245px;
    border: none;
    outline: none;
    resize: none;
    margin: 20px 34px;
  }
`;

const StyledFileInput = styled.button `
    margin: 156px 12px 12px 274px;
  `;
