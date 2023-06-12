import styled from 'styled-components'

export function Modal() {
  return(
    <ModalStyle>
      <div>설정 및 개인정보</div>
      <div>로그아웃</div>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  width: 390px;
  height: 138px;
  font-size: var(--font-size-md);
  border-radius: 10px, 10px, 0, 0;
  background-color: var(--background);
`