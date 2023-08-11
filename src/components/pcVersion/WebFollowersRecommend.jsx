import styled from 'styled-components';
import { useState, useEffect } from 'react';

import FollowersProfile from "./../common/FollowersProfile";

import { getRecFollowingList } from '../../api/followListAPI';

export default function FollowersRecommend() {
  const [myFollowList, setMyFollowList] = useState([])
  const [recFollowList, setRecFollowList] = useState([])
  const myAccountname = JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname;
  const myId = JSON.parse(sessionStorage.getItem('user')).UserAtom.id;

  useEffect(() => {
    async function fetchMyFollowList(){
      let list = await getRecFollowingList(myAccountname);
      setMyFollowList((prevValue) => [...prevValue, ...list]);
    }
    fetchMyFollowList();
  }, []);

  useEffect(() => {
    // 중복된 값을 저장할 Set
    const duplicatedFollowSet = new Set();

    // 중복된 값 제거한 myFollowList _id속성 Set에 추가
    const seen = new Set();

    myFollowList.forEach(async (item, index) => {
      let list = await getRecFollowingList(item.accountname);
      list.forEach((item, index)=>{
        if (seen.has(item._id)) {
          let flag = true;

          // myFollowList(이미 팔로잉중인 리스트)에 포함되면 제외
          for(let i = 0; i< [...myFollowList].length; i++){
            if([...myFollowList][i]._id === item._id){
              flag = false;
              break;
            }
          }
          
          // 나인 경우 제외
          if(myId === item._id) flag = false;

          // 이미 추천리스트에 들어가있는 경우 제외
          for(let i = 0 ; i<[...duplicatedFollowSet].length; i++){
            if([...duplicatedFollowSet][i]._id === item._id){
              flag = false;
              break;
            }
          }
          flag && duplicatedFollowSet.add(item);
          
        } else {
          seen.add(item._id);
        }
      })
      setRecFollowList([...duplicatedFollowSet]);
    })
    
  }, [myFollowList]);

  return (
    <RecWrapperStyle>
      <RecTitleStyle>팔로우 추천</RecTitleStyle>
      <RecBoxStyle>
        <div className='followListWrapper'>
          {recFollowList.length !== 0 ? (
            recFollowList.map((item, index) => (
              <FollowersProfile followingUser={item} key={index} />
            ))
          ) : (
            <div>추천할사람 없음</div>
          )}
        </div>
      </RecBoxStyle>
    </RecWrapperStyle>
  );
}

const RecWrapperStyle = styled.div`
  width: 392px;
  min-height: 38px;
`;

// h태그 페이지 숫자 맞춰서 바꾸기
const RecTitleStyle = styled.h3`
  font-size: var(--font--size-lg);
  color: var(--text-color-2);
  margin-bottom: 20px;
`;

const RecBoxStyle = styled.div`
  height: 396px;
  overflow-y: auto;

  .followListWrapper {
    width: 362px;
  }

  ::-webkit-scrollbar {
    width: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e5e4df;
    background-clip: padding-box;
    border: 10px solid transparent;
    border-radius: 50px;
  }
`;

