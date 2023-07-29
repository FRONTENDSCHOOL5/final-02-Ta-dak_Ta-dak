import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useModalControl from "../hooks/useModalControl";

import  ChatHeader  from '../components/header/ChatHeader';
import { ProfileSm } from '../components/common/Profile';
import { FileUploadSm } from '../components/common/FileUpload';
import { Modal } from './../components/common/Modal';
import SaleItem from '../assets/img/SaleItem.png';

export default function ChatRoom() {
  
  const chatHistory = [
    {
      Msg: '캠핑 아이스 박스 사고 싶어서 문의드려요. 혹시 상태가 괜찮은가요? 짐도 많이 들어가는 편인지 궁급합니다. 고기도 함께 구입하고 싶어요. 다음주에 캠핑을 가야해서 급하게 연락합니다.',
      creatAt: '12:39',
      receive: true,
    },
    {
      Msg: '이번에 고기 언제 들어와요?',
      creatAt: '12:41',
      receive: true,
    },
    {
      Msg: '고기는 다 먹었는데요',
      creatAt: '12:50',
    },
    {
      Img: SaleItem,
      creatAt: '12:51',
    },
  ];

  const {openModal, ModalComponent} = useModalControl();
  const navigate = useNavigate()

  const handleChatRoomOut = () =>{
    navigate(-1)
  }

  return (
    <>
      <ChatHeader name={'바베큐러버'} isButton={true} handleFunc={openModal} />
      <ChatRoomPageStyle>
        {chatHistory.map((item, index) =>
          item.receive ? (
            <ChatContainerStyle key={index}>
              <ProfileSm />
              <p>{item.Msg}</p>
              <span className="time">{item.creatAt}</span>
            </ChatContainerStyle>
          ) : (
            <MyChatContainerStyle key={index}>
              <span className="time">{item.creatAt}</span>
              {!!item.Img || <p>{item.Msg}</p>}
              <img src={item.Img} alt="" />
            </MyChatContainerStyle>
          )
        )}
      </ChatRoomPageStyle>
      <SendStyle>
        <div className="upload">
          <FileUploadSm />
        </div>
        <InputStyle type={'text'} placeholder="메시지 입력하기..."></InputStyle>
        <button id="send">전송</button>
      </SendStyle>
      <ModalComponent>
        <Modal contents={['채팅방 나가기']} handleFunc={handleChatRoomOut} />
      </ModalComponent>
    </>
  );
}

const ChatRoomPageStyle = styled.div`

  height: var(--screen-nav-height);
  padding-top: 24px;

`;

const ChatContainerStyle = styled.div`
  display: flex;
  margin: 0 16px 9px;

  p {
    display: inline-block;
    width: 240px;
    margin-left: 16px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 0 10px 10px;
    font-size: var(--font--size-md);
    line-height: 19px;
    color: var(--text-color-1);
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
    font-size: 10px;
    color: #767676;
  }
`;

const MyChatContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 9px;
  margin-right: 15px;

  p {
    display: inline-block;
    padding: 10px;
    background-color: var(--basic-color-2);
    border-radius: 10px 0 10px 10px;
    color: #fff;
    font-size: var(--font--size-md);
    color: var(--common-text-color-1);
  }

  img {
    border-radius: 10px;
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
    font-size: 10px;
    color: #767676;
  }
`;

const SendStyle = styled.div`
  width: var(--basic-width);
  height: 61px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);

  .upload {
    margin-left: 16px;
  }

  input {
    width: 230px;
    margin: 0 18px;
    font-size: var(--font--size-md);
    background-color: var(--background-color);
  }

  button {
    width: 55px;
    height: 19px;
    font-size: var(--font--size-md);
    color: #c4c4c4;
    display: inline-block;
    transition: 0.5s;
    &:hover {
      color: var(--basic-color-5);
    }
  }
`;

const InputStyle = styled.input`
  color: var(--text-color-1);
  ::placeholder {
    color: var(--text-color-2);
  }
`;
