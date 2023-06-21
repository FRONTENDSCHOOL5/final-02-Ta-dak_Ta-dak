import { useState, useEffect } from "react";
import useImageUploader from "../hooks/useImageUploader";
import { postProduct } from "../api/productAPI";
import useAlertControl from "../hooks/useAlertControl";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components"

import UploadHeader from '../components/header/UploadHeader';
import { Input } from '../components/common/Input';
import { FileUploadSm } from '../components/common/FileUpload';
import Alert from "../components/common/Alert";

import emptyImg from '../assets/img/emptyImg.jpg'

export default function AddProductPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { handleImageChange, imageURL, imagePath } = useImageUploader();
  const { openAlert, AlertComponent } = useAlertControl();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productNameMsg, setProductNameMsg] = useState('');
  const [productExplain, setProductExplain] = useState(null);
  const [productNameValid, setProductNameValid] = useState(true);
  const [productPriceValid, setProductPriceValid] = useState(true);
  const [alertState, setAlertState] = useState('');

  const getItem = location.state?.saleItem;

  console.log(getItem);

  const handleProductName = (event) => {
    setProductName(event.target.value.toLocaleString())
    if (productName.length >= 2 && productName.length <= 15) {
      setProductNameValid(true)
      setProductNameMsg('')
    } else {
      setProductNameValid(false)
      setProductNameMsg('2~15자 이내로 입력해주세요.')
    }
  }

  console.log(imagePath);

  const handleProductPrice = (event) => {
    const pricePattern = /^[1-9][0-9]*$/
    const formatValue = event.target.value.replace(/,/g, '');
    setProductPrice(Number(formatValue).toLocaleString());
    if (pricePattern.test(formatValue)) {
      setProductPriceValid(true)
    } else {
      setProductPriceValid(false)
      setProductPrice('');
    }
  }
  const handleUploadBtnClick = async () => {
    if (productName && productPrice ) {
      if (imageURL === '잘못된 접근') {
        openAlert() 
        setAlertState('상품 이미지가 없습니다.')
      } else {
        await postProduct(productName, Number(productPrice.replace(/,/g, '')), productExplain, imagePath)
        navigate(-1);
      }
    }
  }
  // console.log(imageURL);

  useEffect(()=>{
    if (imageURL === '잘못된 접근') {
      setAlertState('잘못된 업로드입니다.')
      openAlert();
    }
  }, [imageURL])

  return (
    <>
      <UploadHeader contents={'저장'} valid={productName && productPrice} handleUploadBtnClick={handleUploadBtnClick}></UploadHeader>
      <AddProductPageStyle>
        <p>이미지 등록</p>

        <div className='addImg'>
          <FileInputStyle>
            <img src={imageURL !== '잘못된 접근' &&  imageURL || emptyImg } alt='' className='showImg' />
            <div className='uploadImgBtn'>
              <FileUploadSm id={'uploading-img'} onChange={handleImageChange} />
            </div>
          </FileInputStyle>
        </div>
        <div className='inputProductInfo'>
          <Input
            id={'product-name'}
            type={'text'}
            label={'상품명'}
            placeholder={'2~15자 이내여야 합니다.'}
            valid={productNameValid}
            alertMsg={productNameMsg}
            value={productName}
            onChange={handleProductName}
          />
          <Input
            id={'product-price'}
            type={'text'}
            label={'가격'}
            placeholder={'숫자만 입력 가능합니다.'}
            valid={productPriceValid}
            value={productPrice}
            onChange={handleProductPrice}
          />
        </div>
        <p className='textAreaTitle'>상품 설명</p>
        <textarea
          name='productInfo'
          id='product-detail'
          cols='30'
          rows='10'
          value={productExplain}
          onChange={(event) => setProductExplain(event.target.value)}
        ></textarea>
      </AddProductPageStyle>
      <AlertComponent>
        {alertState==='잘못된 업로드입니다.' && <Alert alertMsg={alertState} choice={['확인']}/>}
        {alertState==='상품 이미지가 없습니다.' && <Alert alertMsg={alertState} choice={['확인']}/>}
      </AlertComponent>
    </>
  )
}
const AddProductPageStyle = styled.div`
  margin: 0 auto;
  padding: 0 34px;

  .showImg {
    width: 322px;
    height: 204px;
    margin-top: 15px;
    border-radius: 10px;
    border: 0.5px solid var(--basic-color-8);
  }

  .uploadImgBtn {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }

  p {
    display: inline-block;
    font-size: var(--font--size-sm);
    font-weight: var(--basic-color-7);
    font-weight: var(--font--Regular);
    margin-top: 30px;
    margin-bottom: 18px
  }

  .inputProductInfo {
    margin-top: 20px;
  }

  label {
    color: #000;
  }

  .textAreaTitle {
    font-size: var(--font--size-sm);
    margin: 0;
  }
  
  #product-detail {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(--font--size-sm);
    width: 322px;
    height: 245px;
    border: none;
    outline: none;
    resize: none;
    margin-top: 20px;
  }
`;

const FileInputStyle = styled.button`
    position: relative;
  `;
