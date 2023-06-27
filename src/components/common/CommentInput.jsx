import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../recoil/AtomUserState';
import { writeComment } from '../../api/commentAPI';
import styled from 'styled-components';

import { ProfileSm } from './Profile';
import { useState } from 'react';

export default function CommentInput({ postId, setReset }) {

  const userInfo = useRecoilValue(UserAtom)
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    setContent('')
    await writeComment(postId, content);
    setReset(true)
  }

  return (
    <InputContainerStyle>
      <ProfileSm url={userInfo.image} />
      <InputStyle type={'text'} placeholder='댓글 입력하기...' value={content} onChange={ (event) => setContent(event.target.value) }></InputStyle>
      <button id="comment-post" onClick={handleSubmit}>게시</button>
    </InputContainerStyle>
  )
}

const InputContainerStyle = styled.div`
  width: var(--basic-width);
  min-height: 61px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);

  img {
    width: 40px;
    height: 40px;
    margin: 0 16px;
    top: 13px;
  }

  input {
    width: 260px;
    font-size: var(--font--size-md);
    background-color: var(--background-color);
    color: var(--text-color-1);
  }
  
  button {
    width: 55px;
    height: 19px;
    margin: 0 auto;
    font-size: var(--font--size-md);
    color: #c4c4c4;
    display: inline-block;
    transition: 0.5s;
    &:hover {
      color: var(--basic-color-5);
    }
  }
`
const InputStyle = styled.input`
  ::placeholder {
    color: var(--text-color-2);
  } 
`;

