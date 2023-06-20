import styled, { css } from 'styled-components';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ProfileLg } from './Profile';
import { GreenMdBtn, WhiteMdBtn } from './Button';
import UserId from './UserId';

import { doFollowing, doUnfollowing } from '../../api/followAPI';
import IconSmMessage from '../../assets/img/s-icon-message.svg';
import IconShare from '../../assets/img/icon-share.svg';

export default function UserProfile({ profile, isMyAccount, loadProfilePage,}) {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const followBtnHandler = async () => {
    await doFollowing(accountname);
    loadProfilePage(accountname);
  };

  const unFollowBtnHandler = async () => {
    await doUnfollowing(accountname);
    loadProfilePage(accountname);
  };

  return (
    <UserProfileStyle>
      <ProfileTopStyle>
        <div
          className="follow"
          onClick={() => {
            navigate(`${location.pathname}/follower`);
          }}
        >
          <strong>{profile.followerCount}</strong>
          <p>followers</p>
        </div>
        <ProfileLg url={`${profile.image}`} />
        <div
          className="follow"
          onClick={() => {
            navigate(`${location.pathname}/following`);
          }}
        >
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
        {isMyAccount ? (
          // 내 계정일 경우
          <>
            <WhiteMdBtn contents={'프로필 수정'} />
            <div className="blank"></div>
            <Link to='/addproduct'>
              <WhiteMdBtn contents={'상품 등록'} />
            </Link>
          </>
        ) : (
          // 다른사람 계정일 경우
          <>
            <LinkChatStyle to="/">
              <img src={IconSmMessage} alt="채팅하기" />
            </LinkChatStyle>
            {profile.isfollow ? (
              // 팔로잉 한사람일 경우 - 언팔로우
              <WhiteMdBtn
                contents={'언팔로우'}
                handleFunc={unFollowBtnHandler}
              />
            ) : (
              // 팔로잉 안한 사람일경우 - 팔로우
              <GreenMdBtn contents={'팔로우'} handleFunc={followBtnHandler} />
            )}
            <ShareBtnStyle href={undefined}>
              <img src={IconShare} alt="공유하기" />
            </ShareBtnStyle>
          </>
        )}
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

  .follow {
    cursor: pointer;
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

  .blank{
    display: inline-block;
    width: 12px;
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
