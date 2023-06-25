import { useState } from 'react';
import styled from 'styled-components';

import Album from '../common/Album';

import { ReactComponent as NoPost } from '../../assets/img/sleepbonfire.svg';

export default function AlbumList({ visiblePost }) {

  return (
    <>
      <h2 className="a11y-hidden">앨범형 포스트</h2>
      {visiblePost.length !== 0 ? (
        <AlbumListStyle>
          {visiblePost.map((item, index) => (
            <Album post={item} key={item.id} />
          ))}
        </AlbumListStyle>
      ) : (
        <NoVisiblePost>
          <div className='noPostWrapper'>
            <div>
              <NoPost />
            </div>
            <span>포스트가 없습니다</span>
          </div>
        </NoVisiblePost>
      )}
    </>
  );
}

const AlbumListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
  max-width: var(--basic-width);
  padding: 30px;
  padding: 16px;
`;

const NoVisiblePost = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  .noPostWrapper {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  span {
    color: var(--text-color-1);
    font-size: var(--font--size-md);
  }
`;