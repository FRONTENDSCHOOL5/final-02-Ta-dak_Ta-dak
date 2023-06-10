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
import GalleryList from './GalleryList';

export default function UserPostList() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <h2 className="a11y-hidden">포스트</h2>
      <section style={{ backgroundColor: 'var(--background-color)' }}>
        <TypeTabsWrapperStyle>
          <TypeTabsStyle>
            <TabStyle onClick={() => {setTab(0)}}>
              {/* 판매상품리스트 클릭전, 클릭후 아이콘 필요 */}
              {tab === 0 ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(1)}}>
              {tab === 1 ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(2)}}>
              {tab === 2 ? <IconPostListOn /> : <IconPostListOff />}
            </TabStyle>
          </TypeTabsStyle>
        </TypeTabsWrapperStyle>
        <PostWrapperStyle>
          {[<ShopList />, <PostList />, <GalleryList />][tab]}
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
  /* 상위컴포넌트에서 min-width나 width 속성 조절하면 여기 width값 알맞게 선택해주세요! */
  /* width: 100%;
  max-width: 390px; */
  width: 390px;
  height: 44px;
  box-shadow: inset 0px 0px 0px 2px lightcoral;
  margin: auto;
  padding: 10px;
  text-align: right;
`;

const TabStyle = styled(Link)`
  margin-left: 10px;
`;

const PostWrapperStyle = styled.article`
  /* 상위컴포넌트에서 min-width나 width 속성 조절하면 여기 width값 알맞게 선택해주세요! */
  /* width: 100%;
  max-width: 390px; */
  width: 390px;
  margin: auto;
`;