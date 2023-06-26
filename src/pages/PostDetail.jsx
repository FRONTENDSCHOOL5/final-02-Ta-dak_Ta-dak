import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { getPostDetail } from '../api/postAPI'
import { getComment, deleteComment, reportComment } from '../api/commentAPI'
import { useRecoilValue } from 'recoil'
import { UserAtom } from '../recoil/AtomUserState'
import useModalControl from '../hooks/useModalControl'
import useAlertControl from '../hooks/useAlertControl'
import styled from "styled-components"

import { Modal } from '../components/common/Modal'
import Alert from '../components/common/Alert'
import BasicHeader from "../components/header/BasicHeader"
import Post from "../components/common/Post"
import Comment from "../components/common/Comment"
import CommentInput from "../components/common/CommentInput"
import Loader from '../Loader/Loader';

export default function PostDetail() {

  const myInfo = useRecoilValue(UserAtom)
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [selectComment, setSelectComment] = useState('');
  const { openModal, ModalComponent } = useModalControl();
  const { openAlert, AlertComponent } = useAlertControl();

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
    setTimeout(() => {
      openAlert()
    }, 500);
  }

  useEffect(() => {
    getReq()
    setReset(false)
  }, [reset])

  return (
    <>
      <BasicHeader isButton={false} />
      <PostContainer>
        {loading ? 
        <PostStyle>
          <Post post={post.post}></Post>
        </PostStyle> : 
        <Loader />}
        <CommentStyle>
          {loading ? comment.comments.map((item) => (
            item.content && (
              <li key={item.id}>
                <Comment item={item} setSelectComment={setSelectComment} openModal={openModal} />
              </li>
            ))) : undefined}
        </CommentStyle>
        {loading ? <CommentInput postId={post.post.id} setReset={setReset} /> : null}
      </PostContainer>
      <ModalComponent>
        {
          selectComment.author?.accountname === myInfo.accountname ?
            <Modal contents={['삭제']} handleFunc={deleteReq} /> :
            <Modal contents={['신고']} handleFunc={reportReq} />
        }
      </ModalComponent>
      <AlertComponent>
        <Alert alertMsg={'신고가 접수되었습니다'} choice={['확인']} />
      </AlertComponent>
    </>
  )
}

const PostContainer = styled.div`
  height: var(--screen-nav-height);
  display: flex;
  flex-direction: column;
`;

const PostStyle = styled.div`
  margin: 20px;
  max-height: 540px;
`;

const CommentStyle = styled.ul`
  box-shadow: 0px -1px var(--basic-color-6);
  border-bottom: 1px solid var(--basic-color-6);
  flex-grow: 1;
  flex-basis: 0;
  overflow: scroll;
  overflow-x: hidden;
  padding-top: 20px;
::-webkit-scrollbar {
  background-color: var(--background-color);
  width: 0px;
}
`;