import styled from 'styled-components';

export default function Alert({ alertMsg, choice, handleFunc }) {
  return (
    <div>
    <AlertStyle>
      <p>{alertMsg}</p>
      <ButtonStyle>
      <button className='cancle' onClick={handleFunc}>{choice[0]}</button>
      {choice[1] && <button className='delete' onClick={handleFunc}>{choice[1]}</button>}
      </ButtonStyle>
    </AlertStyle>
    </div>
  );
}

const ButtonStyle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex; 
`;

const AlertStyle = styled.div`
  position: relative;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  font-size: var(--font--size-lg);
  background-color: var(--modal-color);
  overflow: hidden;
  
  p {
    text-align: center;
    padding-top: 27px;
  }

  button {
    transition: all .3s;
    &:hover{
      background-color: var(--basic-color-3);
    }
  }

  .cancle {
    flex-grow: 1;
    flex-basis: 0;
    display: inline-block;
    height: 46px;
    border-top: 1px solid var(--basic-color-6);
    border-right: 1px solid var(--basic-color-6);
    &:hover{
      color: var(--basic-color-5);
    }
  }

  .delete {
    /* bottom: 0; */
    width: 126px;
    height: 46px;
    color: #F22222;
    border-top: 1px solid var(--basic-color-6);
  }
`