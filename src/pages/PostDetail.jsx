import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { getPostDetail } from '../api/postAPI'
import { getComment } from '../api/commentAPI'
import styled from "styled-components"

import BasicHeader from "../components/header/BasicHeader"
import Post from "../components/common/Post"
import Comment from "../components/common/Comment"
import CommentInput from "../components/common/CommentInput"

export default function PostDetail() {

  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reset, setReset] = useState(false);

  const location = useLocation();
  const postId = location.pathname.replace('/postdetail/', '');

  const getReq = async () => {
    const [prePost, preComment] = await Promise.all([getPostDetail(postId), getComment(postId)]);
    setPost(prePost);
    setComment(preComment);
    setLoading(false);
  };

  useEffect(() => {
    getReq()
    setReset(false)
  }, [reset])

  return (
    <>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <BasicHeader />
            <PostContainer>
              <PostStyle>
                <Post post={post.post}></Post>
              </PostStyle>
              <CommentStyle>
                {comment.comments.map((item) => (
                  item.content && (
                    <li key={item.id}>
                      <Comment info={item.author} comment={item.content} createdAt={item.createdAt} />
                    </li>
                  )
                ))}
              </CommentStyle>
              <CommentInput postId={post.post.id} setReset={setReset}/>
            </PostContainer>
          </>
        )
      }
    </>
  )
}

const PostContainer = styled.div`
  height: var(--screen-nav-height);
  display: flex;
  flex-direction: column;
`;

const PostStyle = styled.div`
    padding: 20px;
`;

const CommentStyle = styled.ul`
    box-shadow: 0px -1px var(--basic-color-8);
    flex-grow: 1;
    overflow: scroll;
    padding-top: 20px;
    height: 100%;

  ::-webkit-scrollbar {
    background-color: var(--background-color)
  }
`;