import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ProfileLg } from './Profile';
import { GreenMdBtn, WhiteMdBtn } from './Button';
import UserId from './UserId';

import IconSmMessage from '../../assets/img/s-icon-message.svg';
import IconShare from '../../assets/img/icon-share.svg';

export default function UserProfile({profile, isMyAccount, isFollow}) {
  console.log('sss '+isFollow);
  
  
  return (
    <UserProfileStyle>
      <ProfileTopStyle>
        <div>
          <strong>{profile.followerCount}</strong>
          <p>followers</p>
        </div>
        <ProfileLg url={`${profile.image}`} />
        <div>
          <strong>{profile.followingCount}</strong>
          <p>followings</p>
        </div>
      </ProfileTopStyle>

      <ProfileMiddleStyle>
        <h2>{profile.username}</h2>
        <UserId id={`${profile.accountname}`} />
        <span>{profile.intro}</span>
      </ProfileMiddleStyle>

      <ProfileBottomStyle>
        <LinkChatStyle to="/">
          <img src={IconSmMessage} alt="" />
        </LinkChatStyle>
        {isMyAccount ? (
          // 내 계정일 경우
          <>
            <WhiteMdBtn contents={'프로필 수정'} />
            <WhiteMdBtn contents={'상품 등록'} />
          </>
        ) : // 다른사람 계정일 경우
        isFollow ? (
          // 팔로잉 한사람일 경우 - 언팔로우
          <WhiteMdBtn contents={'언팔로우'} />
        ) : (
          // 팔로잉 안한 사람일경우 - 팔로우
          <GreenMdBtn contents={'팔로우'} />
        )}

        <ShareBtnStyle href={undefined}>
          <img src={IconShare} alt="" />
        </ShareBtnStyle>
      </ProfileBottomStyle>
    </UserProfileStyle>
  );
}

const UserProfileStyle = styled.div`
  /* background-color: var(--background-color); */
  width: var(--basic-width);
  height: 314px;
  text-align: center;
`;

const ProfileTopStyle = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  strong {
    font-weight: var(--font--Bold);
    font-size: 18px;
  }

  p {
    padding-top: 6px;
    font-weight: var(--font--Regular);
    font-size: 10px;
    color: var(--basic-color-7);
  }
`;

const ProfileMiddleStyle = styled.div`
  margin: 15px 0 24px;

  h2 {
    padding-bottom: 5px;
    font-weight: var(--font--size-lg);
    font-size: 18px;
  }
  
  span {
    display: inline-block;
    padding-top: 15px;
    font-weight: var(--font--Regular);
    font-size: var(--font--size-md);
    color: var(--basic-color-7);
  }
`;

const ProfileBottomStyle = styled.div`
  position: relative;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ChatShareBtnCommonStyle = css`
  position: absolute;
  cursor: pointer;
  width: 34px;
  height: 34px;
  display: inline-block;
  padding: 6px;
  background: var(--background-color);
  border: 1px solid var(--basic-color-8);
  border-radius: 50%;
`;

const ShareBtnStyle = styled.a`
  ${ChatShareBtnCommonStyle}
  right: 91px;
`;

const LinkChatStyle = styled(Link)`
  ${ChatShareBtnCommonStyle}
  left: 91px;
`;
