import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconPostAlbumOff } from '../../assets/img/icon-post-album-off.svg';
import { ReactComponent as IconPostAlbumOn } from '../../assets/img/icon-post-album-on.svg';
import { ReactComponent as IconPostListOff } from '../../assets/img/icon-post-list-off.svg';
import { ReactComponent as IconPostListOn } from '../../assets/img/icon-post-list-on.svg';
import ShopList from './ShopList';
import PostList from './PostList';
import AlbumList from './AlbumList';

export default function UserPostList() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <h2 className="a11y-hidden">포스트</h2>
      <section style={{ backgroundColor: 'var(--background-color)', minWidth: '390px' }}>
        <TypeTabsWrapperStyle>
          <TypeTabsStyle>
            <TabStyle onClick={() => {setTab(0)}}>
              {/* 판매상품리스트 클릭전, 클릭후 아이콘 필요 */}
              {tab === 0 ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(1)}}>
              {tab === 1 ? <IconPostListOn /> : <IconPostListOff />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(2)}}>
              {tab === 2 ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
          </TypeTabsStyle>
        </TypeTabsWrapperStyle>
        <PostWrapperStyle>
          {[<ShopList />, <PostList />, <AlbumList />][tab]}
        </PostWrapperStyle>
      </section>
    </>
  );
}

const TypeTabsWrapperStyle = styled.div`
  width: 100%;
  border-top: 0.5px solid var(--basic-color-8);
  border-bottom: 0.5px solid var(--basic-color-8);
`;

const TypeTabsStyle = styled.div`
  width: 100%;
  max-width: 390px;
  height: 44px;
  margin: auto;
  padding: 10px;
  text-align: right;
`;

const TabStyle = styled(Link)`
  margin-left: 10px;
`;

const PostWrapperStyle = styled.article`
  width: 100%;
  max-width: 390px;
  margin: auto;
`;