import styled from 'styled-components';

import Post from '../common/Post';
import { ReactComponent as NoPost } from '../../assets/img/sleepbonfire.svg';

export default function PostList({ visiblePost }) {

  return (
    <>
      <h2 className="a11y-hidden">포스트</h2>
      {visiblePost.length !== 0 ? (
        <PostListStyle>
          {visiblePost.map((item, index) => (
            <Post post={item} key={index} />
          ))}
        </PostListStyle>
      ) : (
        <NoVisiblePost>
          <div className="noPostWrapper">
            <div>
              <NoPost />
            </div>
            <span>포스트가 없습니다</span>
          </div>
        </NoVisiblePost>
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

const NoVisiblePost = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  .noPostWrapper {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  span {
    color: var(--text-color-1);
    font-size: var(--font--size-md);
  }
`;