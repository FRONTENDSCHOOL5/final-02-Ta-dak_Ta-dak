import React from 'react';
import UserId from './UserId';
import basic from './../../assets/img/basic-profile.svg'
import styled from 'styled-components';

export default function SearchProfile() {
  return (
    <SearchProfileStyle>
      <img src={basic} alt="프로필이미지" />
      <div>
        <strong>사용자 이름</strong>
        <UserId id={'exampleId'}/>
      </div>
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
    strong {
      font-weight: var(--font--Medium);
      font-size: var(--font--size-md);
      line-height: 18px;
      margin-bottom: 2px;
    }
  }
`;