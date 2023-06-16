import styled from 'styled-components';

import Post from '../common/Post';

export default function PostList({ visiblePost }) {

  return (
    <>
      <h2 className='a11y-hidden'>포스트</h2>
      <PostListStyle>
        {visiblePost.map(item => (
          <Post post={item} key={item.id} />
        ))}
      </PostListStyle>
    </>
  );
}

const PostListStyle = styled.div`
  width: 100%;
  max-width: var(--basic-width);
  padding: 30px;
  /* Navbar랑 겹치지 않게 padding-bottom은 70px - 추후 16px로 바뀔 수 있음 */
  padding: 16px 16px 70px;
`;