// component/common/SaleItem.jsx 테스트 위한 js파일 - 원영
import React from 'react';
import SaleItem from '../components/common/SaleItem';
import saleItemimg1 from './../assets/testImg/saleItem1.png'
import saleItemimg2 from './../assets/testImg/saleItem2.png'
import saleItemimg3 from './../assets/testImg/saleItem3.png'
import { useState } from 'react';


export default function SaleItemTest() {
  const items = [
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
  
  

  const [saleItem, setSaleItem] = useState(items)
  
  return (
    <>
      <SaleItem saleItem={saleItem}/>
    </>
  );
}
