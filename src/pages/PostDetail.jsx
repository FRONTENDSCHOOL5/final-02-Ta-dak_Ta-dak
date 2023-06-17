import { useLocation } from "react-router-dom"
import styled from "styled-components"

import BasicHeader from "../components/header/BasicHeader"
import Post from "../components/common/Post"
import Comment from "../components/common/Comment"
import CommentInput from "../components/common/CommentInput"

export default function PostDetail() {

  const location = useLocation();
  const post = location.state?.post;
  const comment = location.state?.comment;

  console.log(post);
  console.log(comment);

  return (
    <>
      <PostDetailStyle>
        <BasicHeader />
        <div className="postStyle">
          <Post post={post}></Post>
        </div>
        <div className="commentStyle">
          {comment.comments.map((item)=>{
            return item.content && <Comment info={post.author} comment={item.content} createdAt={item.createdAt}/>
          })}
        </div>
        <CommentInput />
      </PostDetailStyle>
    </>
  )
}

const PostDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--basic-height);
  width: var(--basic-width);

  .postStyle {
    padding: 20px;
    box-shadow: 0px 1px var(--basic-color-8);
  }

  .commentStyle {
    padding: 20px 20px 0;
    flex-grow: 1;
  }
`;
