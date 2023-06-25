import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import SaleItemList from './SaleItemList';
import PostList from './PostList';
import AlbumList from './AlbumList';

import { ReactComponent as IconPostAlbumOff } from '../../assets/img/icon-post-album-off.svg';
import { ReactComponent as IconPostAlbumOn } from '../../assets/img/icon-post-album-on.svg';
import { ReactComponent as IconPostListOff } from '../../assets/img/icon-post-list-off.svg';
import { ReactComponent as IconPostListOn } from '../../assets/img/icon-post-list-on.svg';
import { ReactComponent as IconSaleOff } from './../../assets/img/icon-saleItem-off.svg';
import { ReactComponent as IconSaleOn } from './../../assets/img/icon-saleItem-on.svg';

export default function UserPostList({ saleItem, post }) {
  const { accountname } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const selectedPath = (path.split('/'))[3];

  return (
    <>
      <section style={{ minWidth: '390px' }}>
        <TypeTabsWrapperStyle>
          <TypeTabsStyle>
            <TabStyle to={`/profile/${accountname}`}>
              <span className='a11y-hidden'>포스트 버튼</span>
              {selectedPath===undefined ? <IconPostListOn /> : <IconPostListOff />}
            </TabStyle>
            <TabStyle to={`/profile/${accountname}/album`}>
              <span className='a11y-hidden'>앨범형 포스트 버튼</span>
              {selectedPath==='album' ? <IconPostAlbumOn /> : <IconPostAlbumOff />}
            </TabStyle>
            <TabStyle to={`/profile/${accountname}/saleitem`}>
              <span className='a11y-hidden'>판매상품 버튼</span>
              {selectedPath==='saleitem' ? <IconSaleOn /> : <IconSaleOff />}
            </TabStyle>
          </TypeTabsStyle>
          <PostWrapperStyle>
            {selectedPath===undefined && <PostList visiblePost={post} />}
            {selectedPath==='album' && <AlbumList visiblePost={post} />}
            {selectedPath==='saleitem' && <SaleItemList saleItem={saleItem} />}
          </PostWrapperStyle>
        </TypeTabsWrapperStyle>
      </section>
    </>
  );
}

const TypeTabsWrapperStyle = styled.div`
  border-top: 0.5px solid var(--basic-color-6);
  border-bottom: 0.5px solid var(--basic-color-6);
`;

const TypeTabsStyle = styled.div`
  height: 44px;
  margin: auto;
  padding: 10px;
  text-align: right;
`;

const TabStyle = styled(Link)`
  margin-left: 10px;
`;

const PostWrapperStyle = styled.div`
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