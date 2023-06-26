import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ProfileSm } from './Profile';
import { ReactComponent as IconMore } from '../../assets/img/s-icon-more.svg'

export default function Comment({ item, setSelectComment, openModal }) {

  const history = new Date(item.createdAt).getTime();
  const today = new Date().getTime();
  const subtract = today - history
  const t = Math.floor(subtract / 60000);

  let timeAgo;
  if (t < 1) {
    timeAgo = '방금 전';
  } else if (t < 60) {
    timeAgo = `${t}분 전`;
  } else if (t < 1440) {
    timeAgo = `${Math.floor(t / 60)}시간 전`;
  } else {
    timeAgo = `${Math.floor(t / 1440)}일 전`;
  }

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/profile/${item.author.accountname}`);
  };

  return (
    <>
      <CommentContainerStyle>
        <div className="profileClick" onClick={clickHandler}>
          <ProfileSm url={item.author.image} />
        </div>
        <div className="commentContents">
          <UserNameStyle onClick={clickHandler}>
            {item.author.username}
          </UserNameStyle>
          <TimeStyle>{timeAgo}</TimeStyle>
          <CommentStyle>{item.content}</CommentStyle>
        </div>
        <div className="commentMoreButton">
          <IconMore
            className="commentMoreButton"
            onClick={() => {
              setSelectComment(item);
              openModal();
            }}
          />
        </div>
      </CommentContainerStyle>
    </>
  );
}

const CommentContainerStyle = styled.div`
  width: 358px;
  min-height: 58px;
  display: flex;
  position: relative;
  margin-bottom: 16px;
  padding: 0 20px;

  .commentContents {
    padding: 6px 12px 0 12px;
    font-size: var(--font--size-md);
  }

  .profileClick {
    div {
      cursor: pointer;
    }
  }

  .commentMoreButton {
    position: absolute;
    top: 5px;
    right: 0;
    background-image: url(${IconMore});
    background-position: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const UserNameStyle = styled.span`
  display: inline-block;
  font-size: var(--font--size-md);
  cursor: pointer;
  color: var(--text-color-1);
`;

const TimeStyle = styled.span`
  display: inline-block;
  color: var(--text-color-2);
  font-size: 10px;
  margin-left: 10px;
  position: relative;
  
  &:before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: var(--text-color-1);
    position: absolute;
    top: 50%;
    left: -5px;
  }
`;

const CommentStyle = styled.div`
  margin-top : 15px;
  color: var(--text-color-3);
  padding-right: 15px;
  padding-bottom: 10px;
  font-size:var(--font--size-md);
  font-weight : var(--font--Regular);
`