import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { IsFeedAtom } from '../recoil/AtomFeedState';
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
  const isFeed = useRecoilValue(IsFeedAtom);

  const [loadPostSeq, setLoadPostSeq] = useState(0);
  const [visiblePost, setVisiblePost] = useState([]);


  useEffect(() => {
    if (isBottom) {
      upDateFeed(loadPostSeq + 5)
      setLoadPostSeq((PrevValue) => PrevValue + 5)
    }
  }, [isBottom]);

  const upDateFeed = async (value) => {
    if (location.pathname === '/feed') {
      const data = await getPost(value)
      setVisiblePost((PrevValue) => [...PrevValue, ...data.posts])
      return data
    } 
    // else if (location.pathname === '/recommendfeed') {
    //   const data = await getPostAll(value)
    //   setVisiblePost((PrevValue) => [...PrevValue, ...data.posts])
    // }
  }

  useEffect(() => {
    const upDate = async () => {
      const data = await upDateFeed(loadPostSeq);
      if(data.posts?.length === 0) navigate('/feed/nonfollow');
    }
    if (location.pathname ==='/feed') {
      console.log('/feed');
      upDate();
    } 
    // else if (location.pathname ==='/recommendfeed') {
    //   console.log('/recommendfeed');
    //   upDateFeed(loadPostSeq);
    //   setVisiblePost([]);
    //   setLoadPostSeq(0);
    // }

  }, [isFeed])

  useEffect(() => {
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
