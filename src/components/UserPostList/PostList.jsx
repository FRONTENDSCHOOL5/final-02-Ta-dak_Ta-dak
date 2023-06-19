import styled from 'styled-components';

import Post from '../common/Post';

export default function PostList({ visiblePost }) {

  return (
    <>
      <h2 className="a11y-hidden">포스트</h2>
      {visiblePost.length !== 0 ? (
        <PostListStyle>
          {visiblePost.map((item, index) => (
            <Post post={item} key={item.id} />
          ))}
        </PostListStyle>
      ) : (
        <div>포스트가없음</div>
      )}
    </>
  );
}

const PostListStyle = styled.div`
  width: 100%;
  max-width: var(--basic-width);
  padding: 30px;
  padding: 16px;

  p {
    /* 7줄 넘어가면 말줄임 */
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;