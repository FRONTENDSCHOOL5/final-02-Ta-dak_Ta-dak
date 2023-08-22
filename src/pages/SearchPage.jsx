import { useState , useEffect } from 'react';

import styled from 'styled-components';

import { getSearch } from '../api/searchAPI';
import  SearchHeader  from '../components/header/SearchHeader'
import SearchProfile from '../components/common/SearchProfile';
import useDebounce from '../hooks/useDebounce';


export default function SearchPage() {
  // 검색창에 입력
  const [search, setSearch] = useState('')
  // API 요청으로 받아온 검색결과 목록
  const [searchList, setSearchList] = useState([]) 
  const searchDebounced = useDebounce(search)

  useEffect(() => {
    const setResult = async () => {
      if (searchDebounced) {
        // 입력창에 한 글자라도 입력한 것이 있을 때        
        setSearchList(await getSearch(searchDebounced));
      } else {
        // 입력창에 입력한 것이 없을 때
        setSearchList([]);
      }
    };
    setResult();
  }, [searchDebounced]);

  return (
    <>
      {/* 입력값이 변경되었을 때 값을 추출해서 search에 저장 */}
      <SearchHeader value={search} setValue={setSearch}></SearchHeader>
      <SearchPageStyle>
        <SearchResultWrapper>
          {searchList.length
            ? searchList.map((item, index) => {
                return (
                  <li key={index}>
                    <SearchProfile info={item} />
                  </li>
                );
              })
            : null}
        </SearchResultWrapper>
      </SearchPageStyle>
    </>
  );
}

const SearchPageStyle = styled.div`
  padding: 20px 16px 0;
  width: 390px;
  height: var(--screen-nav-height);
  margin: 0 auto;
  background-color: var(--backgroud-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 0px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const SearchResultWrapper = styled.ul `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
`