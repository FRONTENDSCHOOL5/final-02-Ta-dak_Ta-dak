import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconLike } from './../../assets/img/s-icon-fire.svg';
import { ReactComponent as IconComment } from './../../assets/img/s-icon-message.svg';
import moreButtonIcon from './../../assets/img/icon-more.svg';
import SearchProfile from './SearchProfile';

export default function Post({post}) {
  const [like, setLike] = useState(false);

  return (
    <PostStyle>
      <button className="postMoreButton" />
      <div className="profileComponent">
        <SearchProfile />
      </div>
      <div className="postContainer">
        <Link to={`/postdetail/${post.postId}`}>
          <h3 className="a11y-hidden">포스트 내용</h3>
          <p>{post.postContent}</p>
          {post.postImg && (
            <img
              src={post.postImg}
              alt={`${post.postWriterId}의 포스팅 이미지`}
            />
          )}
        </Link>
        <div className="likeCommentCount">
          <button
            className="likeButton"
            onClick={() => {
              setLike((prev) => !prev);
            }}
          >
            <span className="a11y-hidden">좋아요 버튼</span>
            <IconLike
              className="iconImg"
              fill={like === true ? '#E73C3C' : 'var(--background-color)'}
              stroke={like === true ? '#E73C3C' : 'var(--basic-color-7)'}
            />
            <span className="count">{post.postLike.length}</span>
          </button>
          <Link to={`/postdetail/${post.postId}`}>
            <span className="a11y-hidden">댓글 보기, 남기기</span>
            <IconComment className="iconImg" />
            <span className="count">{post.postComment.length}</span>
          </Link>
        </div>
        <span className="postDate">{post.postDate}</span>
      </div>
    </PostStyle>
  );
}

const PostStyle = styled.article`
  position: relative;
  margin-bottom: 20px;
  max-width: 358px;
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

  .postContainer {
    padding-left: 54px;

    p {
      font-weight: var(--font--Regular);
      font-size: var(--font--size-md);
      line-height: 19px;
      margin-bottom: 16px;
      word-break: break-all;
    }
    img {
      min-width: 304px;
      width: 100%;
      max-height: 228px;
      min-height: 228px;
      border: 0.5px solid var(--basic-color-8);
      border-radius: 10px;
      margin-bottom: 16px;
    }
    .likeCommentCount {
      margin-bottom: 16px;
      .likeButton {
        margin-right: 18px;
      }
      .iconImg {
        vertical-align: bottom;
        width: 20px;
        height: 20px;
        margin: 0 6px 0 0;
      }
      .count {
        font-size: var(--font--size-sm);
        font-weight: var(--font--Regular);
        line-height: 12px;
        color: var(--basic-color-7);
      }
    }
    .postDate {
      font-weight: var(--font--Regular);
      font-size: var(--font--size-sm);
      line-height: 12px;
      color: var(--basic-color-7);
    }
  }
`;