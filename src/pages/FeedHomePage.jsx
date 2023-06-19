import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getPost, getPostAll } from '../api/postAPI';
import useScrollBottom from '../hooks/useScrollBottom';
import styled from 'styled-components';

import MainHeader from '../components/header/MainHeader';
import PostList from '../components/UserPostList/PostList';

export default function FeedHomePage() {
  const elementRef = useRef(null);
  const isBottom = useScrollBottom(elementRef);
  const navigate = useNavigate();
  const location = useLocation();

  const [loadPostSeq, setLoadPostSeq] = useState(0);
  const [visiblePost, setVisiblePost] = useState([]);

  useEffect(() => {
    if (isBottom) {
      upDateFeed(loadPostSeq + 5)
      setLoadPostSeq((PrevValue) => PrevValue + 5)
    }
  }, [isBottom]);
  
  useEffect(() => {
    const upDate = async () => {
      const data = await upDateFeed(0);
      if (data.posts.length === 0) {
        navigate('/feed/nonfollow')
      };
    }
    if (location.pathname === '/feed') {
      upDate()
    }
    else if (location.pathname === '/recommendfeed') {
      upDateFeed(0);
    }
    setVisiblePost([]);
    setLoadPostSeq(0);
  }, [location.pathname])
  
  const upDateFeed = async (value) => {
    if (location.pathname === '/feed') {
      const data = await getPost(value)
      setVisiblePost((PrevValue) => [...PrevValue, ...data.posts])
      return data
    }
    else if (location.pathname === '/recommendfeed') {
      const data = await getPostAll(value)
      setVisiblePost((PrevValue) => [...PrevValue, ...data.posts])
    }
  }
  
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
