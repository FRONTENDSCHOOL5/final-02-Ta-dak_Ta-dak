
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import IconArrowLeft from '../../assets/img/icon-arrow-left.svg'

export function SearchHeader() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <SearchHeaderStyle>
      <img src={IconArrowLeft} alt="" onClick={handleGoBack}/>
      <label className="a11y-hidden" htmlFor="search-id">계정 검색</label>
      <input id="search-id" type="text" placeholder='계정 검색'/>
    </SearchHeaderStyle>
  )
}

const SearchHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: 390px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    cursor: pointer;
  }

  #search-id {
    width: 316px;
    height: 32px;
    background: #F2F2F2;
    border-radius: 32px;
    padding: 0 16px;
    font-size: var(--font--size-md);
    font-weight: var(--font--Regular);

    &::placeholder {
      color: #c4c4c4;
    }
  }
`;