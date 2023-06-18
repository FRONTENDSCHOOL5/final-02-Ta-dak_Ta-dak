import styled from 'styled-components';

import { ChatHeader } from '../components/header/ChatHeader';
// import { ProfileSm } from '../components/common/Profile';

export default function ChatRoom() {
  return(
    <>
    <ChatRoomPageStyle>
      <ChatHeader />
      <SendStyle>  
      {/* <ProfileSm url={''} /> */}
      
      <InputStyle type={'text'} placeholder='메시지 입력하기...'></InputStyle>
      <button id="send">전송</button>
      </SendStyle>
    </ChatRoomPageStyle>
    </>
  )
}

const ChatRoomPageStyle = styled.div`
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);
`

const SendStyle = styled.div`
  width: var(--basic-width);
  height: 61px;
  display: flex;
  align-items: center;
  background-color: #FCFBF3;

  img {
    width: 40px;
    height: 40px;
    margin: 0 16px;
    top: 13px;
  }

  input {
    width: 260px;
    font-size: var(--font--size-md);
    background-color: var(--background-color);
  }
  
  button {
    width: 55px;
    height: 19px;
    margin: 0 auto;
    font-size: var(--font--size-md);
    color: #c4c4c4;
    display: inline-block;
    transition: 0.5s;
    &:hover {
      color: var(--basic-color-4);
    }
  }
`
const InputStyle = styled.input`
  ::placeholder {
    color: #c4c4c4;
  } 
`;
