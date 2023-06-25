import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import UserId from './UserId';
import { ProfileMd } from './Profile'

export default function SearchProfile({info}) {
  const navigate = useNavigate();

  const followerClickHandler = (event) => {
    navigate(`/profile/${info.accountname}`);
  };

  return (
    <SearchProfileStyle>
      {info && (
        <>
          <div onClick={followerClickHandler}>
            <ProfileMd url={info.image} />
          </div>
          <div onClick={followerClickHandler}>
            <strong>{info.username}</strong>
            <UserId id={info.accountname} />
          </div>
        </>
      )}
    </SearchProfileStyle>
  );    
}

const SearchProfileStyle = styled.section`
  height: 50px;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 1/1;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    margin-right: 12px;
  }

  div {
    cursor: pointer;
    strong {
      font-weight: var(--font--Medium);
      font-size: var(--font--size-md);
      line-height: 18px;
      margin-bottom: 2px;
      color : var(--text-color-1)
    }
  }
`;