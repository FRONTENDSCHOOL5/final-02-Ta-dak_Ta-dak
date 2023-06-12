import styled from 'styled-components'

export function Modal() {
  return(
    <ModalStyle>
      <div className='bar'></div>
      <div className='settingComponent'>설정 및 개인정보</div>
      <div className='logout'>로그아웃</div>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 138px;
  left: 26px;
  font-size: var(--font-size-md);
  border-radius: 10px 10px 0 0;
  background-color: var(--background-color);

.bar {
  width: 50px;
  height: 4px;
  background: #DBDBDB;
  border-radius: 5px;
}

.settingComponent {
  padding-left: 24px;
  line-height: 46px;
  width: 390px;
  height: 46px;
  left: 26px;
}

.logout {
  padding-left: 24px;
  line-height: 46px;
  width: 390px;
  height: 46px;
  left: 26px;
}
`