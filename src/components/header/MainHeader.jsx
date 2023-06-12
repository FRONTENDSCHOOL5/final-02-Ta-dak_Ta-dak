import styled from 'styled-components';
import IconSearch from '../../assets/img/icon-search.svg';

export function MainHeader() {
  return (
    <MainHeaderStyle>
      <h2>감귤마켓 피드</h2>
      <img src={IconSearch} alt="" />
    </MainHeaderStyle>
  );
}

const MainHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: 390px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    font-weight: var(--font--Medium);
    font-size: 18px;
  }

  img {
    width: 22px;
    height: 22px;
  }
`;
