import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useScrollBottom from '../hooks/useScrollBottom';
import getFeed from '../api/getFeed';

import { MainHeader } from '../components/header/MainHeader';
import PostList from '../components/UserPostList/PostList';
import { NavBar } from '../components/common/NavBar';


export default function FeedHome() {
  const elementRef = useRef(null);
  const isBottom = useScrollBottom(elementRef);

  const [loadPostSeq, setLoadPostSeq] = useState(0);
  const [visiblePost, setVisiblePost] = useState([]);

  useEffect(() => {
    if (isBottom) {
      upDateFeed(loadPostSeq + 5)
      setLoadPostSeq((PrevValue) => PrevValue + 5)
    }
  }, [isBottom]);

  async function upDateFeed(value) {
    const posts = await getFeed(value)    
    setVisiblePost((PrevValue) => [...PrevValue, ...posts])
  }

  useEffect(() => {
    upDateFeed(loadPostSeq)
  },[])

  return (
    <>
      <FeedHomeStyle>
        <MainHeader />
        <PostListStyle ref={elementRef}>
          {visiblePost.length !== 0 ?  <PostList visiblePost={visiblePost}/> : <div>loading</div>}
        </PostListStyle>
        <NavBar />
      </FeedHomeStyle>
    </>
  );
}

const FeedHomeStyle = styled.div`
  width: var(--basic-width);
  height: var(--screen-width);
  overflow: hidden;
  background-color: var(--background-color);
`;

const PostListStyle = styled.div`
  height: 712px;
  overflow-y: scroll;
`;
