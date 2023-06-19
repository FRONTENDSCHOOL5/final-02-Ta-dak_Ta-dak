import { useState } from 'react';
import styled from 'styled-components';

import Album from '../common/Album';

import postImg1 from './../../assets/testImg/post1.png';
import postImg2 from './../../assets/testImg/post2.png';

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
        <div>앨범형 포스트가없음</div>
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