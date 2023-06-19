import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFollowingList } from '../apiTest/followAPI';
import FollowersProfile from '../components/common/FollowersProfile';
import ChatHeader from '../components/header/ChatHeader';

export default function FollowingListPage() {
  const { accountname } = useParams();
  const [followingList, setFollowingList] = useState([]);
  
  useEffect(()=>{
    const loadFollowingList = async()=>{
      const list = await getFollowingList(accountname)
      setFollowingList([...list])
    }
    loadFollowingList()
  },[])

  followingList.length !== 0 && console.log(followingList);

  return (
    <>
      <ChatHeader />
      <FollowingListStyle>
        {followingList.length !== 0 ? (
          followingList.map((item, index) => (
            <FollowersProfile followingUser={item} key={item._id} />
          ))
        ) : (
          <div>팔로잉한 사람이 없음, 로딩중 같이 나타낼수잇는 이미지</div>
        )}
      </FollowingListStyle>
    </>
  );
}

const FollowingListStyle = styled.section`
  padding: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0px;
  }
`;