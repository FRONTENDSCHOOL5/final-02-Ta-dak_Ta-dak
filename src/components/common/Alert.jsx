import styled from 'styled-components';

export function Alert() {
  return (
    <div>
    <AlertStyle>
      <p>상품을 삭제할까요?</p>
      <button className='cancle'>취소</button>
      <button className='delete'>삭제</button>
    </AlertStyle>
    </div>
  );
}

const AlertStyle = styled.div`
  position: relative;
  text-align: center;
  padding: 20px 0;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  font-size: var(--font--size-lg);
  background-color: var(--background-color);
  overflow: hidden;
  
  button {
    position: absolute;
    transition: all .3s;
    &:hover{
      color: var(--basic-color-4);
      background-color: var(--basic-color-1);
    }
  }

  .cancle {
    bottom: 0;
    left: 0;
    width: 126px;
    height: 46px;
    border-top: 1px solid var(--basic-color-8);
    border-right: 1px solid var(--basic-color-8);
  }

  .delete {
    bottom: 0;
    width: 126px;
    height: 46px;
    border-top: 1px solid var(--basic-color-8);
  }
`