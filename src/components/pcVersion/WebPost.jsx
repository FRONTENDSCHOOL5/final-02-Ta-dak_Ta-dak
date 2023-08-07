import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { UserAtom } from '../../recoil/AtomUserState';
import { postLike, deleteLike } from '../../api/heartAPI';
import { deletePost, reportPost } from '../../api/postAPI';
import useModalControl from '../../hooks/useModalControl';
import useAlertControl from '../../hooks/useAlertControl';
import styled, { keyframes } from 'styled-components';

import { Modal } from './Modal';
import Alert from './Alert';
import WebSearchProfile from './WebSearchProfile';

import { ReactComponent as IconLike } from './../../assets/img/s-icon-fire.svg';
import { ReactComponent as IconComment } from './../../assets/img/s-icon-message.svg';
import moreButtonIcon from './../../assets/img/s-icon-more.svg';
import downArrow from '../../assets/img/down-arrow.png'
import errorImg from '../../assets/img/UploadImage404.svg'

export default function Post({ post }) {
  const navigate = useNavigate();
  const location = useLocation();
  const myInfo = useRecoilValue(UserAtom);
  const [like, setLike] = useState(post.hearted);
  const [contentMore, setContentMore] = useState(true);
  const [alertState, setAlertState] = useState('');
  const isLike = post.hearted;
  const { openModal, ModalComponent } = useModalControl();
  const { openAlert, AlertComponent } = useAlertControl();
  const id = post.id || post._id;

  const postLikeReq = async () => {
    await postLike(id);
  }

  const deleteLikeReq = async () => {
    await deleteLike(id);
  }

  const reportPostReq = async () => {
    const response = await reportPost(id);
    response && setAlertState('신고가 접수되었습니다.')
    openAlert();
  }

  const deletePostReq = async () => {
    if (location.pathname.includes('/postdetail')) {
      await deletePost(id)
      navigate(-1);
    } else {
      await deletePost(id)
      window.location.reload();
    }
  }

  const handleModal = (event) => {
    if (event.target.textContent === '삭제') {
      openAlert();
    } else if (event.target.textContent === '수정') {
      navigate('/editpost', {
        state: {
          id: id,
          content: post.content,
          image: post.image
        }
      })
    } else if (event.target.textContent === '확인') {
      deletePostReq();
    }
  }

  const timeFormat = (time) => {
    const originalDate = new Date(time);
    const formattedDate = `
      ${originalDate.getFullYear()}년 
      ${originalDate.getMonth() + 1}월 
      ${originalDate.getDate()}일`;
    return formattedDate
  }

  return (
    <>
      <PostStyle>
        <button className='postMoreButton' onClick={() => {
          openModal()
          setAlertState('게시글을 삭제할까요?')
        }} />
        <div className='profileComponent'>
          <WebSearchProfile info={post.author} />
        </div>
        <PostContainerStyle locationPathname={location.pathname} contentMore={contentMore}>
          <Link to={`/postdetail/${id}`}>
            <h3 className='a11y-hidden'>포스트 내용</h3>
            <div onClick={() => setContentMore((prevValue) => !prevValue)}>
              <pre>{post.content}</pre>
              {post.content?.length >= 180 && <button className="moreContentBtn" ></button>}
            </div>
            {contentMore && post.image && (
              <img
                src={post.image}
                alt={`${post.author.accountname}의 포스팅 이미지`}
                onError={(event) => {
                  event.target.src = errorImg;
                }}
              />
            )}
          </Link>
          <div className='likeCommentCount'>
            <button
              className='likeButton'
              onClick={() => {
                setLike((prev) => !prev);
              }}
            >
              <span className='a11y-hidden'>좋아요 버튼</span>
              <IconLike
                className='iconImg'
                fill={like ? '#E73C3C' : 'var(--background-color)'}
                stroke={like ? '#E73C3C' : '#767676'}
                onClick={like ? deleteLikeReq : postLikeReq}
              />
              {isLike ?
                <span className='count'>{like ? post.heartCount : post.heartCount - 1}</span> :
                <span className='count'>{like ? post.heartCount + 1 : post.heartCount}</span>
              }
            </button>
            <Link to={`/postdetail/${id}`}>
              <span className='a11y-hidden'>댓글 보기, 남기기</span>
              <IconComment className='iconImg' />
              <span className='count'>{post.comments?.length}</span>
            </Link>
          </div>
          <span className='postDate'>{timeFormat(post.createdAt)}</span>
        </PostContainerStyle>
      </PostStyle>

      <AlertComponent>
        {alertState === '신고가 접수되었습니다.' && <Alert alertMsg={alertState} choice={['확인']} />}
        {alertState === '게시글을 삭제할까요?' && <Alert alertMsg={alertState} choice={['취소', '확인']} handleFunc={handleModal} />}
      </AlertComponent>

      <ModalComponent>
        {post.author?.accountname === myInfo.accountname ?
          <Modal contents={['삭제', '수정']} handleFunc={handleModal} /> :
          <Modal contents={['신고']} handleFunc={reportPostReq} />}
      </ModalComponent>
    </>
  );
}

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const PostStyle = styled.article`
  position: relative;
  margin-bottom: 20px;
  max-width: 511px;
  width: 100%;

  .postMoreButton {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 18px;
    height: 18px;
    background: url(${moreButtonIcon}) no-repeat center / auto;
  }
  .profileComponent {
    margin-bottom: 12px;
  }
`;

const PostContainerStyle = styled.div`
  padding-left: 54px;
  position: relative;
  
  .moreContentBtn {
    transition: .3s;
    margin: 0 131px 16px;
    background: url(${downArrow}) no-repeat center center;
    filter: invert(50%);
    background-size: cover;
    width: 16px;
    height: 16px;
    display: ${({ locationPathname }) => (locationPathname.includes('/postdetail')) ? 'block' : 'none'};
    transform: ${({ contentMore }) => (contentMore) ? 'rotate(0)' : 'rotate(180deg)'};
  }

  pre {
    font-weight: var(--font--Regular);
    font-size: var(--font--size-Lg);
    line-height: 24px;
    margin-bottom: 16px;
    word-break: break-all;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--text-color-1);
    /* transition: 1s; */
    max-height: ${({ locationPathname, contentMore }) =>
    (!locationPathname.includes('/postdetail')
    ) ? '77px' : contentMore ? '110px' : '300px'};
    text-overflow: ${({ locationPathname }) =>
    (!locationPathname.includes('/postdetail')
    ) ? 'ellipsis' : 'none'};
    overflow: ${({ locationPathname }) =>
    (!locationPathname.includes('/postdetail')) ? 'hidden' : 'scroll'};
    display: -webkit-box;
      -webkit-line-clamp: ${({ locationPathname }) => (locationPathname === '/feed') ? '6' : ''};
      -webkit-box-orient: vertical;
      overflow-y: scroll; 
      overflow-x: hidden;
    ::-webkit-scrollbar {
      background-color: var(--background-color);
      width: 0px;
    } 
  }

  img {
    animation: ${fadeIn} 1s ease-in;
    min-width: 455px;
    width: 100%;
    max-height: 332px;
    min-height: 332px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    margin-bottom: 16px;
    object-fit: cover;
  }

  .likeCommentCount {
    margin-bottom: 16px;
    .likeButton {
      margin-right: 18px;
      font-size: var(--font--size-Lg);
    }
    .iconImg {
      vertical-align: bottom;
      width: 25px;
      height: 25px;
      margin: 0 6px 0 0;
    }
    .count {
      /* font-size: var(--font--size-Lg); */
      font-weight: var(--font--Regular);
      line-height: 12px;
      color: var(--text-color-2);
    }
  }

  .postDate {
    font-weight: var(--font--Regular);
    font-size: var(--font--size-Lg);
    line-height: 12px;
    color: var(--text-color-2);
  }
`;