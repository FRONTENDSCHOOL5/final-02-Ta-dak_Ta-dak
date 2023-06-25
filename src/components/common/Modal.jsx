import styled from 'styled-components'

export function Modal({ contents, handleFunc }) {

  return (
    <ModalStyle>
      <div className='bar'></div>
      <ul>
        {contents.map((item, index) => {
          return (
            <li key={index}>
              <button className='settingComponent' onClick={handleFunc}>{item}</button>
            </li>
          );
        })}
      </ul>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--basic-width);
  left: 26px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: var(--font-size-md);
  background-color: var(--modal-color);

.bar {
  width: 50px;
  height: 4px; 
  margin: 18px 0;   
  background: #DBDBDB;
  border-radius: 5px;
}

button{
  text-align: left;
  transition: all .3s;
  &:hover{
    color: var(--basic-color-5);
    background-color: var(--basic-color-3);
  }
}

.settingComponent {
  padding-left: 24px;
  line-height: 46px;
  width: var(--basic-width);
  height: 46px;
  left: 26px;
}

.logout {
  padding-left: 24px;
  line-height: 46px;
  width: var(--basic-width);
  height: 46px;
  left: 26px;
}
`