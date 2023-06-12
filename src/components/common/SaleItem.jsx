import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SaleItem({saleItem}) {  
  return (
    <SaleItemStyle key={saleItem.itemId}>
      <h3 className="a11y-hidden">{saleItem.itemName}</h3>
      <Link to={`/profile/${saleItem.itemId}`}>
        <img src={saleItem.itemImg} alt={saleItem.itemName} />
        <span className="itemName">{saleItem.itemName}</span>
        <span className="itemPrice">{saleItem.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
      </Link>
    </SaleItemStyle>
  );
}

const SaleItemStyle = styled.button`
  width: 140px;
  height: 162px;
  text-align: start;
  margin: auto;
  img {
    width: 140px;
    height: 115px;
    border-radius: 8px;
    border: 0.8px solid #dad3d3;
  }
  span {
    display: block;
    /* 한줄 넘어가면 말줄임 되게 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .itemName {
    font-size: var(--font--size-l);
  }
  .itemPrice {
    color: var(--basic-color-4);
    font-size: var(--font--size-md);
    font-weight: var(--font--Bold);
  }
`;