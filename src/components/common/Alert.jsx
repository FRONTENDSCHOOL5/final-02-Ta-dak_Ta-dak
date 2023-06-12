import { useState } from 'react';
import styled from 'styled-components';

export function Alert() {
  const [setConfirm] = useState(false);

  return (
    <div>
      <p>상품을 삭제할까요?</p>
      <button onClick={() => setConfirm(false)}>취소</button>
      <button onClick={() => console.log('삭제')}>삭제</button>
    </div>
  );
}

const AlertStyle = styled.div` 
width: 252px;
height: 110px;
border-radius: 10px;
font-size: var(--font--size-md);
background-color: var(--background);
`