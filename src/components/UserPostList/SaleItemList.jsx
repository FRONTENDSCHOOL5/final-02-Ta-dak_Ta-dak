import { useState } from 'react';
import styled from 'styled-components';

import SaleItem from '../common/SaleItem';
import ProductDetailModal from '../common/ProductDetailModal';

export default function SaleItemList({saleItem}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState('');

  return (
    <>
      <h2 className="a11y-hidden">판매상폼</h2>
      {saleItem.length!==0 ? (
        <SaleItemListStyle>
          {saleItem.map((item, index) => (
            <>
            <SaleItem saleItem={item} setIsModalOpen={setIsModalOpen} setItems={setItems}/>
            </>
          ))}
          {isModalOpen && (
            <ProductDetailModal saleItem={items} setIsModalOpen={setIsModalOpen}/>
          )}
        </SaleItemListStyle>
      ) : (
        <div>판매상품이 없음</div>
      )}
    </>
  );
}

const SaleItemListStyle = styled.div`
  display: grid;
  width: 100%;
  max-width: var(--basic-width);
  padding: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;