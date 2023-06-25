import styled from 'styled-components';

import  BasicHeader  from '../components/header/BasicHeader';
import { ProfileSm } from '../components/common/Profile';
import { NavBar } from '../components/common/NavBar';
import { useNavigate } from 'react-router-dom';

export default function ChatList() {
  const navigate = useNavigate();

  return (
    <>
      <BasicHeader isButton={false}/>
      <ChatListPageStyle>
        <ChatContainerStyle
          onClick={() => {
            navigate('/chatroom');
          }}
        >
          <ProfileSm url={''} confirm={true} />
          <div className="text">
            <span>바베큐러버</span>
            <div className="chatroomlink">
              <p>이번에 고기 언제들어와요?</p>
              <div className="date">2023.06.15</div>
            </div>
          </div>
        </ChatContainerStyle>
        <ChatContainerStyle>
          <ProfileSm url={''} />
          <div className="text">
            <span>주말마다캠핑</span>
            <div className="chatroomlink">
              <p>지금 뭐해, 나랑 별 보러 가지 않을래</p>
              <div className="date">2023.06.15</div>
            </div>
          </div>
        </ChatContainerStyle>
        <ChatContainerStyle>
          <ProfileSm url={''} />
          <div className="text">
            <span>팔공산 쳐돌이</span>
            <div className="chatroomlink">
              <p>팔공산 정기뻗은~ 동산에 새봄을 알리는</p>
              <div className="date">2023.06.15</div>
            </div>
          </div>
        </ChatContainerStyle>
      </ChatListPageStyle>
    </>
  );
}

const ChatListPageStyle = styled.div`
  width: var(--basic-width);
  height: var(--screen-nav-height);
  background-color: var(--background-color);
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0;
  }
`;

const ChatContainerStyle = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  cursor: pointer;

  img {
    width: 42px;
    height: 42px;
    margin: 0 16px;
  }

  .text {
    flex: 1;
  }

  span {
    display: block;
    height: 19px;
    font-weight: bold;
    font-size: var(--font--size-md);
    color: var(--text-color-1);
  }

  .chatroomlink {
    display: flex;
    justify-content: space-between;
  }

  p {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    font-size: var(--font--size-sm);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 220px;
    color: var(--text-color-3);
  }

  .date {
    color: var(--text-color-1);
    font-size: 10px;
    margin-right: 16px;
  }
`;
