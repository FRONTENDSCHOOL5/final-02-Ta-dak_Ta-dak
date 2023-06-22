import { useState } from 'react';
import styled from 'styled-components';

import SaleItem from '../common/SaleItem';
import { ReactComponent as NoPost } from '../../assets/img/sleepbonfire.svg';

export default function SaleItemList({saleItem}) {

  return (
    <>
      <h2 className="a11y-hidden">판매상폼</h2>
      {saleItem.length !== 0 ? (
        <SaleItemListStyle>
          {saleItem.map((item, index) => (
            <SaleItem saleItem={item} key={item.id} />
          ))}
        </SaleItemListStyle>
      ) : (
        <NoVisiblePost>
          <div className="noPostWrapper">
            <div>
              <NoPost />
            </div>
            <span>판매상품이 없습니다</span>
          </div>
        </NoVisiblePost>
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

const NoVisiblePost = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  .noPostWrapper {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  span {
    color: var(--basic-color-7);
    font-size: var(--font--size-md);
  }
`;