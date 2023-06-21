import styled from 'styled-components';
import { useState } from 'react';

import { GreenSmBtn, WhiteSmBtn } from './Button';
import { ProfileSm } from './Profile';

import { doFollowing, doUnfollowing } from '../../api/followAPI';
import { useNavigate } from 'react-router-dom';


export default function FollowersProfile({ followingUser }) {
  const [isMe, setIsMe] = useState(false);
  
  const [isFollow, setIsFollow] = useState(followingUser.isfollow)
  const navigate = useNavigate();  

  useState(()=>{
    if(JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname === followingUser.accountname){
      setIsMe(true)
    }
  },[])

  const followBtnHandler = async () => {
    await doFollowing(followingUser.accountname);
    setIsFollow(true);
  };

  const unFollowBtnHandler = async () => {
    await doUnfollowing(followingUser.accountname);
    setIsFollow(false);
  };

  const followerClickHandler = (event) =>{
    navigate(`/profile/${followingUser.accountname}`)
  }
  
  return (
    <FollowersProfileStyle>
      <ProfileSm url={`${followingUser.image}`} />
      <div className='userInfo' onClick={followerClickHandler}>
        <p>{followingUser.username}</p>
        <span>{followingUser.intro}</span>
      </div>
      {
        !isMe?
          isFollow ? (
            <WhiteSmBtn contents={'취소'} handleFunc={unFollowBtnHandler} />
            ) : (
            <GreenSmBtn contents={'팔로우'} handleFunc={followBtnHandler} />
          )
        :null
      }
      
    </FollowersProfileStyle>
  );
}

const FollowersProfileStyle = styled.div`
  position: relative;
  /* width: 358px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  img {
    width: 50px;
    height: 50px;
  }

  .userInfo {
    position: absolute;
    padding-left: 62px;
    cursor: pointer;
    
    p,
    span {
      width: calc(358px * 0.6);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      padding-bottom: 6px;
      font-weight: var(--font--Medium);
      font-size: var(--font--size-md);
    }
    span {
      display: inline-block;
      font-weight: var(--font--Regular);
      font-size: var(--font--size-sm);
      color: var(--basic-color-7);
    }
  }
`;
