import styled, { css } from 'styled-components';

import BasicProfile from '../../assets/img/basic-profile.svg';

function getProfileSrc(url) {
  return (url.includes("http://146.56.183.55:5050/Ellipse.png") || !url.includes("https://")) ? BasicProfile : (url || BasicProfile);
}

export function ProfileLg({ url = false }) {
  return <ProfileLgStyle src={ url || BasicProfile } alt="" />;
}

export function ProfileMd({ url = false }) {
  return <ProfileMdStyle src={getProfileSrc(url)} alt="" />;
}

export function ProfileSm({ url = false }) {
  return <ProfileSmStyle src={getProfileSrc(url)} alt="" />;
}

const ProfileCommonStyle = css`
  vertical-align: top;
  border-radius: 50%;
  object-fit: cover;
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
