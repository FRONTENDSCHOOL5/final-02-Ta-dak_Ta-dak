import styled from 'styled-components';

import BasicHeader from '../components/header/BasicHeader';
import { ProfileSm } from '../components/common/Profile';
import { useNavigate } from 'react-router-dom';

import dummyData from '../dummyData/chatDummyData.json';

export default function ChatList() {
  const navigate = useNavigate();

  return (
    <>
      <BasicHeader isButton={false} />
      <ChatListPageStyle>
        {
          dummyData.map((item, index) => {
            const lastMessageCreatedAt = item.messages[item.messages.length - 1].createdAt.split(" ");

            return (
              <ChatContainerStyle
                key={index}
                onClick={() => {
                  navigate(`/chatroom/${item.accountname}`);
                }}
              >
                <ProfileSm url={''} confirm={!item.messages.slice().reverse().find(message => message.receive === true).confirm}/>
                <div className="text">
                  <span>{item.name}</span>
                  <div className="chatroomlink">
                    <p>{item.messages.slice().reverse().find(message => message.Msg !== undefined).Msg}</p>
                    <div className="date">{`${lastMessageCreatedAt[0]}${lastMessageCreatedAt[1]}${lastMessageCreatedAt[2]}`}</div>
                  </div>
                </div>
              </ChatContainerStyle>
            )
          })
        }
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
