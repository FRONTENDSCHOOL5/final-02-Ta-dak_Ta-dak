import styled, { css } from 'styled-components';

import BasicProfile from '../../assets/img/basic-profile.svg';

function getProfileSrc(url) {
  if (!!url && typeof url === "string" && url.includes("https://") && url !== "http://146.56.183.55:5050/Ellipse.png") {
    return url;
  } else {
    return BasicProfile;
  }
}


export function ProfileLg({ url = false }) {
  return <ProfileLgStyle src={url || BasicProfile} alt="" />
}

export function ProfileMd({ url = false }) {
  return <ProfileMdStyle src={getProfileSrc(url)} alt="" />
}

export function ProfileSm({ url = false, confirm }) {
  return (
    <ProfileContainer confirm={confirm}>
      <ProfileSmStyle src={getProfileSrc(url)} alt="" />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  position: relative;
  &:after{
    position: absolute;
    top: 0;
    left: 15px;
    content: '';
    width:  12px;
    height: 12px;
    border-radius: 50%;
    background-color: #FF8B13;
    display: ${({ confirm }) => (confirm) ? 'block' : 'none'};
  }
`;

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