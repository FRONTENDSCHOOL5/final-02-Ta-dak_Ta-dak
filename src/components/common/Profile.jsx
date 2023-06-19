import styled, { css } from 'styled-components';

import BasicProfile from '../../assets/img/basic-profile.svg';

export function ProfileLg({ url = false }) {
  return <ProfileLgStyle src={url ? url : BasicProfile} alt="" />;
}

export function ProfileMd({ url = false }) {
  return <ProfileMdStyle src={url ? url : BasicProfile} alt="" />;
}

export function ProfileSm({ url = false, confirm = false }) {
  return (
    <ProfileContainer confirm={confirm}>
      <ProfileSmStyle src={url ? url : BasicProfile} alt="" />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  position: relative;
  &:after{
    display: ${({confirm}) => ((confirm) ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 15px;
    content: '';
    width:  12px;
    height: 12px;
    border-radius: 50%;
    background-color: #FF8B13;
  }
`;

const ProfileCommonStyle = css`
  vertical-align: top;
  border-radius: 50%;
`;

const ProfileLgStyle = styled.img`
  ${ProfileCommonStyle}
  width: 110px;
  height: 110px;
`;

const ProfileMdStyle = styled.img`
  ${ProfileCommonStyle}
  width: 50px;
  height: 50px;
`;

const ProfileSmStyle = styled.img`
  ${ProfileCommonStyle}
  width: 40px;
  height: 40px;
`;
