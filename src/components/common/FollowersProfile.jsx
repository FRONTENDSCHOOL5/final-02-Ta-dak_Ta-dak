import styled from 'styled-components';

import { GreenSmBtn, WhiteSmBtn } from './Button';
import { ProfileSm } from './Profile';

export default function FollowersProfile({isFollow}) {
  return (
    <FollowersProfileStyle>
      <ProfileSm url={''}/>
      <div>
        <p>낭만있는캠린이</p>
        <span>낭만있게 불멍타임 타닥타닥(ASMR 같네요~🔥)</span>
      </div>
      {isFollow ? <WhiteSmBtn contents={'취소'} /> : <GreenSmBtn contents={'팔로우'} />}
    </FollowersProfileStyle>
  );
}

const FollowersProfileStyle = styled.div`
  background-color: var(--background-color);
  position: relative;
  width: 358px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
  }
  
  div {
    position: absolute;
    left: 62px;
    p, span {
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
