import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SaleItemList from './SaleItemList';
import PostList from './PostList';
import AlbumList from './AlbumList';

import { ReactComponent as IconSaleOff } from './../../assets/img/icon-saleItem-off.svg';
import { ReactComponent as IconSaleOn } from './../../assets/img/icon-saleItem-on.svg';
import { ReactComponent as IconPostAlbumOff } from '../../assets/img/icon-post-album-off.svg';
import { ReactComponent as IconPostAlbumOn } from '../../assets/img/icon-post-album-on.svg';
import { ReactComponent as IconPostListOff } from '../../assets/img/icon-post-list-off.svg';
import { ReactComponent as IconPostListOn } from '../../assets/img/icon-post-list-on.svg';

export default function UserPostList({saleItem, post}) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <section style={{ minWidth: '390px' }}>
        <TypeTabsWrapperStyle>
          <TypeTabsStyle>
            <TabStyle onClick={() => {setTab(0)}}>
              <span className='a11y-hidden'>판매상품 버튼</span>
              {tab === 0 ? <IconSaleOn /> : <IconSaleOff  />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(1)}}>
              <span className='a11y-hidden'>포스트 버튼</span>
              {tab === 1 ? <IconPostListOn /> : <IconPostListOff />}
            </TabStyle>
            <TabStyle onClick={() => {setTab(2)}}>
              <span className='a11y-hidden'>앨범형 포스트 버튼</span>
              {tab === 2 ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
          </TypeTabsStyle>
        </TypeTabsWrapperStyle>
        <PostWrapperStyle>
          {[<SaleItemList saleItem={saleItem} />, <PostList visiblePost={post}/>, <AlbumList visiblePost={post}/>][tab]}
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
  max-width: var(--basic-width);
  height: 44px;
  margin: auto;
  padding: 10px;
  text-align: right;
`;

const TabStyle = styled(Link)`
  margin-left: 10px;
`;

const PostWrapperStyle = styled.div`
  width: 100%;
  height: calc( var(--screen-nav-height) - 358px);
  overflow-y: auto;
  overflow-x: hidden;

  max-width: var(--basic-width);
  margin: auto;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0px;
  }
`;