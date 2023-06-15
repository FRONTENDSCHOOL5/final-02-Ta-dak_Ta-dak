import styled from 'styled-components'

export function Modal() {
  return(
    <ModalStyle>
      <div className='bar'></div>
      <button className='settingComponent'>설정 및 개인정보</button>
      <button className='logout'>로그아웃</button>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--basic-width);
  height: 138px;
  left: 26px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: var(--font-size-md);
  background-color: var(--background-color);

.bar {
  width: 50px;
  height: 4px;    
  background: #DBDBDB;
  border-radius: 5px;
}

button{
  text-align: left;
  transition: all .3s;
  &:hover{
    color: var(--basic-color-4);
    background-color: var(--basic-color-1);
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