import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import {ReactComponent as IconArrowLeft} from '../../assets/img/icon-arrow-left.svg'

export default function SearchHeader({value, setValue}) {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <SearchHeaderStyle>
      <IconArrowLeft onClick={handleGoBack} />
      <label className='a11y-hidden' htmlFor='searchId'>계정 검색</label>
      <input id='searchId' type='text' placeholder='계정 검색' value={value} onChange={(e) => setValue(e.target.value)}/>
    </SearchHeaderStyle>
  )
}

const SearchHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: var(--basic-width);
  height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);
  
  .backUrlBtn {
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
    background-image : url(${IconArrowLeft});
  }

  #searchId {
    width: 316px;
    height: 32px;
    background: #F2F2F2;
    border-radius: 32px;
    padding: 0 16px;
    font-size: var(--font--size-md);
    font-weight: var(--font--Regular);

    &::placeholder {
      color: var(--text-color-2);
    }
  }
`;