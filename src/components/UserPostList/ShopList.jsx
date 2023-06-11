import React, { useState } from 'react';
import styled from 'styled-components';
import SaleItem from '../common/SaleItem';
import saleItemimg1 from './../../assets/testImg/saleItem1.png'
import saleItemimg2 from './../../assets/testImg/saleItem2.png'
import saleItemimg3 from './../../assets/testImg/saleItem3.png'

export default function ShopList() {
  const exampleItems = [
    {
      itemId: 0,
      itemImg: saleItemimg1,
      itemName: '버너 취사용품 세트',
      itemPrice: 76000,
    },
    {
      itemId: 1,
      itemImg: saleItemimg2,
      itemName: '캠핑 조리도구 세트',
      itemPrice: 16000,
    },
    {
      itemId: 2,
      itemImg: saleItemimg3,
      itemName: '미니 아이스박스',
      itemPrice: 8000,
    },
  ];
  const [saleItem, setSaleItem] = useState(exampleItems);

  return (
    <>
      <ShopListStyle>
        <SaleItem saleItem={saleItem} />
        <SaleItem saleItem={saleItem} />
        <SaleItem saleItem={saleItem} />
      </ShopListStyle>
    </>
  );
}

const ShopListStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;