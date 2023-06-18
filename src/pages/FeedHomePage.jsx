import { useState, useEffect, useRef } from 'react';
import useScrollBottom from '../hooks/useScrollBottom';
import { getPost } from '../api/postAPI';
import styled from 'styled-components';

import MainHeader from '../components/header/MainHeader';
import PostList from '../components/UserPostList/PostList';
import { NavBar } from '../components/common/NavBar';


export default function FeedHomePage() {
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
    const data = await getPost(value)
    setVisiblePost((PrevValue) => [...PrevValue, ...data.posts])
  }

  useEffect(() => {
    upDateFeed(loadPostSeq)
  }, [])

  return (
    <>
      <MainHeader />
      <PostListStyle ref={elementRef}>
        {visiblePost.length !== 0 ? <PostList visiblePost={visiblePost} /> : <div>loading</div>}
      </PostListStyle>
    </>
  );
}

const PostListStyle = styled.div`
  height: var(--screen-nav-height);
  overflow: scroll; 
  ::-webkit-scrollbar {
  background-color: var(--background-color);
  }
`;
