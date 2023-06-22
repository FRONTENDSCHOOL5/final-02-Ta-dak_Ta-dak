import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { getSearch } from '../api/searchAPI';
import  SearchHeader  from '../components/header/SearchHeader'
import SearchProfile from '../components/common/SearchProfile';
import { NavBar } from '../components/common/NavBar';


export default function SearchPage() {
  // 검색창에 입력
  const [search, setSearch] = useState('')
  // 검색창에 뜨는 데이터 
  const [searchList, setSearchList] = useState([]) 
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(false)

  // 입력값이 변경되었을 때 값을 추출해서 search에 저장
  const navigate = useNavigate();
  
  // GetSearch에 await걸어줌
  // 아무것도 입력하지않아도 api에서 받아온게 뜨니까 입막음완료
    const setResult = async () => {
      setSearchList(await getSearch(search));
    }
  // 여러번 관리 useEffect 아무것도 입력하지 않았을때 아무것도 안뜨게 하기
  useEffect(() => {
    let timer;
    if(search.length >= 1) {      
      setResult()
      setIsLoading(true)
    } else if (search.length === 0 ){
      setIsLoading(false)
      timer = setTimeout(() => {
        setSearchList([])
      }, 500);
    }
    setIsLoading(false)
    return () => {
      clearTimeout(timer);
    }
  }, [search])

  return (
    <>
      <SearchHeader value={search} setValue={setSearch}></SearchHeader>
      <SearchPageStyle>
      <SearchResultWrapper>
        {isLoading ? null: (
          <>
          {searchList ? (
        <>
        {searchList.map((item, index) => {
        return (<li key={index}>
          <SearchProfile info={item}/>
        </li>)
      })}</>) : (
        <>
        <div>
          <h2>검색결과가 없습니다!</h2>
        </div>
        </>)}
        </>)}
      
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
`;

const SearchResultWrapper = styled.ul `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
`