import { useState } from 'react';
import styled from 'styled-components';

import SaleItem from '../common/SaleItem';

import saleItemImg1 from './../../assets/testImg/saleItem1.png'
import saleItemImg2 from './../../assets/testImg/saleItem2.png'
import saleItemImg3 from './../../assets/testImg/saleItem3.png'

export default function SaleItemList() {
  const sampleItems = [
    {
      itemId: 'item0',
      itemImg: saleItemImg1,
      itemName: '버너 취사용품 세트',
      itemPrice: 7600009999999,
    },
    {
      itemId: 'item1',
      itemImg: saleItemImg2,
      itemName: '캠핑 조리도구 세트',
      itemPrice: 16000,
    },
    {
      itemId: 'item2',
      itemImg: saleItemImg3,
      itemName: '미니 아이스박스',
      itemPrice: 8000,
    },
    {
      itemId: 'item3',
      itemImg: saleItemImg1,
      itemName: '버너 취사용품 세트',
      itemPrice: 76000,
    },
    {
      itemId: 'item4',
      itemImg: saleItemImg2,
      itemName: '캠핑 조리도구 세트',
      itemPrice: 16000,
    },
    {
      itemId: 'item5',
      itemImg: saleItemImg3,
      itemName: '미니 아이스박스',
      itemPrice: 8000,
    },
    {
      itemId: 'item6',
      itemImg: saleItemImg1,
      itemName: '버너 취사용품 세트',
      itemPrice: 76000,
    },
    {
      itemId: 'item7',
      itemImg: saleItemImg2,
      itemName: '캠핑 조리도구 세트',
      itemPrice: 16000,
    },
    {
      itemId: 'item8',
      itemImg: saleItemImg3,
      itemName: '미니 아이스박스',
      itemPrice: 8000,
    },
  ];
  const [saleItem, setSaleItem] = useState(sampleItems);

  return (
    <>
      <h2 className='a11y-hidden'>판매상폼</h2>
      <SaleItemListStyle>
        {saleItem.map((item, index) => (
          <SaleItem saleItem={item} key={item.itemId} />
        ))}
      </SaleItemListStyle>
    </>
  );
}

const SaleItemListStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: var(--basic-width);
  /* Navbar랑 겹치지 않게 padding-bottom은 70px - 추후 16px로 바뀔 수 있음 */
  padding: 30px 30px 70px;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;