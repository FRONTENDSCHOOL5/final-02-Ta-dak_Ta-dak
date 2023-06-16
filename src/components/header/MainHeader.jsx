import styled from 'styled-components';

import IconSearch from '../../assets/img/icon-search.svg';

export function MainHeader() {
  return (
    <MainHeaderStyle>
      <h2>타닥타닥 피드</h2>
      <button className='iconSearch'></button>
    </MainHeaderStyle>
  );
}

const MainHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    font-weight: var(--font--Medium);
    font-size: 18px;
  }

  .iconSearch {
    background-image : url(${IconSearch});
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
