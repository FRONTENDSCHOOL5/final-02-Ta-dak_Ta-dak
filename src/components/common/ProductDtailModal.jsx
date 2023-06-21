import styled from 'styled-components';

import { ReactComponent as Xbutton }from '../../assets/img/x.svg'
import Product from '../../assets/img/product1.svg'
import { ReactComponent as Garland } from '../../assets/img/garland.svg'


export default function ProductDtailModal() {

  return (
    <>
    <BackgorundStyle>
    <ProductDtailModalStyle>
    <XbuttonStyle>
        <Xbutton></Xbutton>
    </XbuttonStyle>
    <GarlandStyle></GarlandStyle>
    <img src={ Product } alt="상품사진" />
    <h2>감성 캠핑 웨건</h2>
    <h3>40,000원</h3>
    <p>상품 설명 혹은 링크</p>
    <div>
    16만원 주고 구매했던 취사용품 세트입니다.
    보관 가방을 증정품으로 받은건데 함께 드려요.
    2인 기준으로 구성된 세트입니다.
    사용횟수가 두 번이라서 거의 새상품 입니다.
    16만원 주고 구매했던 취사용품 세트입니다.
    보관 가방을 증정품으로 받은건데 함께 드려요.
    2인 기준으로 구성된 세트입니다.
    사용횟수가 두 번이라서 거의 새상품 입니다.
    16만원 주고 구매했던 취사용품 세트입니다.
    보관 가방을 증정품으로 받은건데 함께 드려요.
    2인 기준으로 구성된 세트입니다.
    사용횟수가 두 번이라서 거의 새상품 입니다.
    </div>
    {/* <button className='modifyBtn'>수정</button> */}
    </ProductDtailModalStyle>
    </BackgorundStyle>
    </>

  )
}

const BackgorundStyle = styled.div`
position: absolute;
  width: var(--basic-width);
  height: var(--basic-height)-60px;
  background-color: #302F2F66;
  margin: 0;
`

const ProductDtailModalStyle = styled.div`
  border: 1px solid #dbdbdb;
  position: relative;
  width: 303px;
  height: 458px;
  background-color: var(--background-color);
  border-radius: 20px;
  margin: 20vh auto;
  
    img {
      display: block;
      width: 235px;
      height: 153px;
      margin: 0 auto;
      position: relative;
      top: -85px;
      z-index: 1;
    }

    h2 {
      font-size:  15px;
      font-weight: 500;
      margin-left: 32px;
      margin-top: 12px;
      position: relative;
      top: -80px;
    }

    h3 {
      font-size:  var(--font--size-md);
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
      top: -67px;
      left: 200px;
    }
`

const XbuttonStyle = styled.button`
  display: block;
  padding: 5px;
  position: relative;
  top:10px;
  margin-left: 259px;
`

const GarlandStyle = styled(Garland)`
  position: relative;
  top: -40px;
  z-index: 3;
`