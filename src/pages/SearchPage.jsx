import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import GetSearch from '../api/GetSearch';
import { SearchHeader } from '../components/header/SearchHeader'
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
  const inputChange = (e)=>{
    const {value} = e.target
    setSearch(value)
  }
  const navigate = useNavigate();
  
// GetSearch에 await걸어줌
// 아무것도 입력하지않아도 api에서 받아온게 뜨니까 입막음완료
  const setResult = async () => {
    setSearchList(await GetSearch(search));
  }
// 여러번 관리 useEffect 아무것도 입력하지 않았을때 아무것도 안뜨게 하기
  useEffect(() => {
    let time;
    if(search.length >= 1) {      
      setResult()
      setIsLoading(true)
    } else if (search.length === 0 ){
      setIsLoading(false)
      time = setTimeout(() => {
        setSearchList([])
      }, 500);
    }
    setIsLoading(false)
    return () => {
      clearTimeout(time);
    }
}, [search])

console.log(searchList) 
  return (
    <>
      <SearchPageStyle>
      <SearchHeader value={search} setValue={setSearch}></SearchHeader>
      <SearchResultWrapper>
        {isLoading ? <div>로딩중...</div> : (
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
      <NavBar></NavBar>
      </SearchPageStyle>
    </>
  );
}

const SearchPageStyle = styled.div `
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: var(--backgroud-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const SearchResultWrapper = styled.ul `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
`