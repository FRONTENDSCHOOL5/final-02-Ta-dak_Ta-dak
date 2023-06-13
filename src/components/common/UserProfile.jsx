import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ProfileLg } from './Profile';
import { GreenMdBtn } from './Button';
import UserId from './UserId';

import IconSmMessage from '../../assets/img/s-icon-message.svg';
import IconShare from '../../assets/img/icon-share.svg';

export default function UserProfile() {
  return (
    <UserProfileStyle>
      <ProfileTopStyle>
        <div>
          <strong>2950</strong>
          <p>followers</p>
        </div>
        <ProfileLg url={''}/>
        <div>
          <strong>128</strong>
          <p>followings</p>
        </div>
      </ProfileTopStyle>

      <ProfileMiddleStyle>
        <h2>낭만있는캠린이</h2>
        <UserId id={'weniv_Camping'}/>
        <span>낭만있게 불멍타임 타닥타닥(ASMR 같네요~🔥)</span>
      </ProfileMiddleStyle>

      <ProfileBottomStyle>
        <LinkChatStyle to="/">
          <img src={IconSmMessage} alt="" />
        </LinkChatStyle>
        <GreenMdBtn contents={'팔로우'} />
        <ShareBtnStyle href={undefined}>
          <img src={IconShare} alt="" />
        </ShareBtnStyle>
      </ProfileBottomStyle>
    </UserProfileStyle>
  );
}

const UserProfileStyle = styled.div`
  background-color: var(--background-color);
  width: 390px;
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
