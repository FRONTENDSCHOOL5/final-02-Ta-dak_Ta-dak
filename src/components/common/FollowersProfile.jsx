import styled from 'styled-components';
import { GreenSmBtn, WhiteSmBtn } from './Button';
import { ProfileSm } from './Profile';

export default function FollowersProfile({isFollow}) {
  return (
    <FollowersProfileStyle>
      <ProfileSm />
      <div>
        <p>애월읍 한라봉 최고 맛집</p>
        <span>정성을 다해 농사짓는 한라봉</span>
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

    p {
      padding-bottom: 6px;
      font-weight: var(--font--Medium);
      font-size: var(--font--size-md);
    }
    span {
      font-weight: var(--font--Regular);
      font-size: var(--font--size-sm);
      color: var(--basic-color-7);
    }
  }
`;
