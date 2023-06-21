import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getFollowerList, getFollowingList } from '../api/followListAPI';
import useScrollBottom from '../hooks/useScrollBottom';

import FollowersProfile from '../components/common/FollowersProfile';
import ChatHeader from '../components/header/ChatHeader';

export default function FollowListPage() {
  const elementRef = useRef(null);
  const isBottom = useScrollBottom(elementRef);

  const { accountname } = useParams();
  const location = useLocation();
  const [loadFollowSeq, setLoadFollowSeq] = useState(0);
  const [followList, setFollowList] = useState([]);
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (isBottom) {
      loadFollowList(loadFollowSeq + 20);
      setLoadFollowSeq((PrevValue) => PrevValue + 20);
    }
  }, [isBottom]);
  
  useEffect(()=>{
    loadFollowList(loadFollowSeq)
  },[])

  const loadFollowList = async (value) => {
    let list
    if(location.pathname === `/profile/${accountname}/following`){
      list = await getFollowingList(accountname, value);
      setTitle('Followings');
    }
    else if (location.pathname === `/profile/${accountname}/follower`) {
      list = await getFollowerList(accountname, value);
      setTitle('Followers');
    }
    setFollowList((prevValue) => [...prevValue, ...list]);
  };

  return (
    <>
      <ChatHeader name={`${title}`} isButton={false} />
      <FollowListStyle ref={elementRef}>
        {followList.length !== 0 ? (
          followList.map((item, index) => (
            <FollowersProfile followingUser={item} key={item._id} />
          ))
        ) : (
          <div>팔로잉한 사람이 없음 or 로딩중</div>
        )}
      </FollowListStyle>
    </>
  );
}

const FollowListStyle = styled.section`
  height: var(--screen-nav-height);
  padding: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0px;
  }
`;