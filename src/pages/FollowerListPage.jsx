import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFollowerList } from '../apiTest/followListAPI';
import ChatHeader from '../components/header/ChatHeader';
import FollowersProfile from '../components/common/FollowersProfile';

export default function FollowerListPage() {
  const { accountname } = useParams();
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    const loadFollowerList = async () => {
      const list = await getFollowerList(accountname);
      setFollowerList([...list]);
    };
    loadFollowerList();
  }, []);

  return (
    <>
      <ChatHeader />
      <FollowerListStyle>
        {followerList.length !== 0 ? (
          followerList.map((item, index) => (
            <FollowersProfile followingUser={item} key={item._id} />
          ))
        ) : (
          <div>팔로우한 사람이 없음, 로딩중 같이 나타낼수잇는 이미지</div>
        )}
      </FollowerListStyle>
      </>
  );
}

const FollowerListStyle = styled.section`
  padding: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0px;
  }
`;