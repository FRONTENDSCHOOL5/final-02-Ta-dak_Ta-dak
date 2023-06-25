import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getFollowerList, getFollowingList } from '../api/followListAPI';
import useScrollBottom from '../hooks/useScrollBottom';

import FollowersProfile from '../components/common/FollowersProfile';
import ChatHeader from '../components/header/ChatHeader';
import Loader from '../Loader/Loader';

export default function FollowListPage() {
  const elementRef = useRef(null);
  const isBottom = useScrollBottom(elementRef);

  const { accountname } = useParams();
  const location = useLocation();
  const [loadFollowSeq, setLoadFollowSeq] = useState(0);
  const [followList, setFollowList] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isBottom) {
      loadFollowList(loadFollowSeq + 20);
      setLoadFollowSeq((PrevValue) => PrevValue + 20);
    }
  }, [isBottom]);

  useEffect(() => {
    loadFollowList(loadFollowSeq);
  }, []);

  const loadFollowList = async (value) => {
    let list;
    if (location.pathname === `/profile/${accountname}/following`) {
      list = await getFollowingList(accountname, value);
      setTitle('Followings');
      setLoading(true);
    } else if (location.pathname === `/profile/${accountname}/follower`) {
      list = await getFollowerList(accountname, value);
      setTitle('Followers');
      setLoading(true);
    }
    setFollowList((prevValue) => [...prevValue, ...list]);
  };

  return (
    <>
      <ChatHeader name={`${title}`} isButton={false} />
      <FollowListStyle ref={elementRef}>
        {loading ? (
          followList.length !== 0 ? (
            followList.map((item, index) => (
              <FollowersProfile followingUser={item} key={item._id} />
            ))
          ) : (
            <NoFollowListStyle>
              {title === 'Followings' ? (
                <span>팔로잉한 사람이 없습니다</span>
              ) : (
                <span>팔로워가 없습니다</span>
              )}
            </NoFollowListStyle>
          )
        ) : (
          <Loader />
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

const NoFollowListStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--text-color-1);
    font-size: var(--font--size-md);
  }
`;
