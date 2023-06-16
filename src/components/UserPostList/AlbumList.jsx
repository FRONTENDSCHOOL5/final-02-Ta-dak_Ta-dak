import { useState } from 'react';
import styled from 'styled-components';

import Album from '../common/Album';

import postImg1 from './../../assets/testImg/post1.png';
import postImg2 from './../../assets/testImg/post2.png';

export default function AlbumList() {
  const samplePosts = [
    {
      postId: 'post0',
      postWriterId: 'user0',
      postImg: postImg1,
      postContent:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      postLike: ['user1', 'user2', 'user3'],
      postComment: [
        { commentId: 'user1', comment: '예시댓글1입니다.' },
        { commentId: 'user2', comment: '예시댓글2입니다.' },
        {
          commentId: 'user4',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod dolore numquam optio, doloremque quis quia incidunt praesentium harum sed porro laudantium, voluptas iusto animi nihil unde, eveniet voluptate aliquid?',
        },
        { commentId: 'user1', comment: '예시댓글1-1입니다.' },
      ],
      postDate: '2023년 1월 11일',
    },
    {
      postId: 'post1',
      postWriterId: 'user1',
      postImg: null,
      postContent:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      postLike: ['user1', 'user2'],
      postComment: [
        { commentId: 'user1', comment: '예시댓글1입니다.' },
        { commentId: 'user3', comment: '예시댓글2입니다.' },
      ],
      postDate: '2023년 2월 22일',
    },
    {
      postId: 'post2',
      postWriterId: 'user2',
      postImg: postImg2,
      postContent: '제주도 캠핑장에는 귤도 있다',
      postLike: [],
      postComment: [],
      postDate: '2023년 3월 30일',
    },
  ];

  const [post, setPost] = useState(samplePosts);

  return (
    <>
      <h2 className='a11y-hidden'>앨범형 포스트</h2>
      <AlbumListStyle>
        {post.map((item, index)=>(
          <Album post={item} key={item.postId} />
        ))}
      </AlbumListStyle>
    </>
  );
}

const AlbumListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
  max-width: var(--basic-width);
  padding: 30px;
  /* Navbar랑 겹치지 않게 padding-bottom은 70px - 추후 16px로 바뀔 수 있음 */
  padding: 16px 16px 70px;
`;