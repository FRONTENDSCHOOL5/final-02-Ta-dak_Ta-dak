import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { getPostDetail } from '../api/postAPI'
import { getComment, deleteComment, reportComment } from '../api/commentAPI'
import { useRecoilValue } from 'recoil'
import { UserAtom } from '../recoil/AtomUserState'
import useModalControl from '../hooks/useModalControl'
import styled from "styled-components"

import { Modal } from '../components/common/Modal'
import BasicHeader from "../components/header/BasicHeader"
import Post from "../components/common/Post"
import Comment from "../components/common/Comment"
import CommentInput from "../components/common/CommentInput"

export default function PostDetail() {

  const myInfo = useRecoilValue(UserAtom)
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [selectComment, setSelectComment] = useState('');
  const { openModal, ModalComponent } = useModalControl();

  const location = useLocation();
  const postId = location.pathname.replace('/postdetail/', '');

  const getReq = async () => {
    const [prePost, preComment] = await Promise.all([getPostDetail(postId), getComment(postId)]);
    setPost(prePost);
    setComment(preComment);
    setLoading(true);
  };

  const deleteReq = async () => {
    await deleteComment(postId, selectComment.id)
    setReset(true)
  }

  const reportReq = async () => {
    await reportComment(postId, selectComment.id)
    setReset(true)
  }

  useEffect(() => {
    getReq()
    setReset(false)
  }, [reset])

  return (
    <>
      <BasicHeader />
      <PostContainer>
        <PostStyle>
          {loading ? <Post post={post.post}></Post> : <div>loading...</div>}
        </PostStyle>
        <CommentStyle>
          {loading ? comment.comments.map((item) => (
            item.content && (
              <li key={item.id}>
                <Comment item={item} setSelectComment={setSelectComment} openModal={openModal} />
              </li>
            ))) : <div>loading...</div>}
        </CommentStyle>
        {loading ? <CommentInput postId={post.post.id} setReset={setReset} /> : <div>loading...</div>}
      </PostContainer>
      <ModalComponent>
        {
          selectComment.author?.accountname === myInfo.accountname ?
            <Modal contents={['삭제']} handleFunc={deleteReq} /> :
            <Modal contents={['신고']} handleFunc={reportReq} />
        }
      </ModalComponent>
    </>
  )
}

const PostContainer = styled.div`
  min-height: var(--screen-nav-height);
  display: flex;
  flex-direction: column;
`;

const PostStyle = styled.div`
  margin: 20px;
  height: 458px;
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