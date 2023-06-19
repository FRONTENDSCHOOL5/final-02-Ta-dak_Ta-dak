import styled from 'styled-components';

export default function Alert({ alertMsg, choice, handleFunc }) {
  return (
    <div>
    <AlertStyle>
      <p>{alertMsg}</p>
      <button className='cancle' onClick={handleFunc}>{choice[0]}</button>
      <button className='delete' onClick={handleFunc}>{choice[1]}</button>
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
    &:hover{
      color: var(--basic-color-4);
    }
  }

  .delete {
    bottom: 0;
    width: 126px;
    height: 46px;
    color: #F22222;
    border-top: 1px solid var(--basic-color-8);
  }
`