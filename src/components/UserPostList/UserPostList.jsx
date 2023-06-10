import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconPostAlbumOff } from '../../assets/img/icon-post-album-off.svg';
import { ReactComponent as IconPostAlbumOn } from '../../assets/img/icon-post-album-on.svg';
import { ReactComponent as IconPostListOff } from '../../assets/img/icon-post-list-off.svg';
import { ReactComponent as IconPostListOn } from '../../assets/img/icon-post-list-on.svg';

export default function UserPostList() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <h2 className="a11y-hidden">포스트</h2>
      <section style={{backgroundColor:'var(--background-color)'}}>
        <TypeTabsWrapperStyle>
          <TypeTabs>
            <Link onClick={()=>{setTab(1)}}><IconPostAlbumOff /></Link>
            <Link onClick={()=>{setTab(2)}}><IconPostListOff /></Link>
          </TypeTabs>
        </TypeTabsWrapperStyle>
        <PostWrapperStyle>
          ddd
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae ducimus repudiandae porro et soluta laborum vel voluptatum accusamus pariatur commodi ea esse, optio suscipit! Modi, eveniet. Voluptatum, voluptates ex!
          {/* <TabContent tab={tab}/> */}
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

const TypeTabs = styled.div`
  width: 100%;
  max-width: 390px;
  /* 의문: 스크롤 줄어도 그 크기 유지돼야될거같은데 (감귤도 그럼) 근데 max-width로 어케하더라? */
  /* width: 390px; */
  height: 44px;
  box-shadow: inset 0px 0px 0px 2px lightcoral;
  margin: auto;
`;

const PostWrapperStyle = styled.article`
  width: 100%;
  max-width: 390px;
  /* width: 390px; */
  margin: auto;
`;