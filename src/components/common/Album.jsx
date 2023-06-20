import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Album({post}) {
  return (
    post.image && 
    <AlbumStyle>
      <Link to={`/postdetail/${post.id}`}>
        <img
          src={post.image}
          alt={`${post.author.username}의 포스팅 이미지`}
        />
      </Link>
    </AlbumStyle>
  );
}

const AlbumStyle = styled.li`
    display: inline-block;
    min-width: 114px;
    max-width: 114px;
    min-height: 114px;
    max-height: 114px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    vertical-align: top;
    object-fit: cover;
  }
`;