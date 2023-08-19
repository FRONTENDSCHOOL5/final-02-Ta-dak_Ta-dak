import { useState , useEffect } from 'react';

import styled from 'styled-components';

import { getSearch } from '../api/searchAPI';
import  SearchHeader  from '../components/header/SearchHeader'
import SearchProfile from '../components/common/SearchProfile';
import useDebounce from '../hooks/useDebounce';


export default function SearchPage() {
  // 검색창에 입력
  const [search, setSearch] = useState('')
  // 검색창에 뜨는 데이터 
  const [searchList, setSearchList] = useState([]) 
  const searchDebounced = useDebounce(search)

  useEffect(() => {
    // let timer;
    // getSearch에 await걸어줌
    const setResult = async () => {
      // 입력할 때마다 search 값 바뀜
      // 입력할 때마다 search 값으로 검색 API 요청 보내서 받아온 리스트 searchList에 저장
      if (searchDebounced) {
        // 입력창에 한 글자라도 입력한 것이 있을 때
        console.log(searchDebounced + '요청됨');
        setSearchList(await getSearch(searchDebounced));
      } else {
        // 입력창에 입력한 것이 없을 때
        console.log('입력된 값이 없음');
        // 아무것도 입력하지 않았을때 아무것도 안뜨게 하기
        // 처음에 검색창을 눌렀을 때는 api 요청 안이뤄져서 searchList 빈 배열
        // 참고 : query에 아무 값이 없는 상태로 요청 발생 -> 모든 유저 정보 다 불러와짐
        // 입력했다가 지웠을 때 0.5초 뒤에 비우는 이유 : 진짜 모르겠음.. 그냥 setSearchList([]) 해도 비워져야되는거 아닌가?
        // timer = setTimeout(() => {
        //   setSearchList([]);
        // }, 500);
        setSearchList([]);
      }
    };
    setResult();
    // return () => clearTimeout(timer);
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