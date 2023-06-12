import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Album({post}) {
  return (
    post.postImg && 
    <AlbumStyle>
      <Link to={`/postdetail/${post.postId}`}>
        <img
          src={post.postImg}
          alt={`${post.postWriterId}의 포스팅 이미지`}
        />
      </Link>
    </AlbumStyle>
  );
}

const AlbumStyle = styled.li`
    display: inline-block;
    min-width: 114px;
    max-width: 114px;
    min-height: 114px;
    max-height: 114px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    vertical-align: top;
  }
`;