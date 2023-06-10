import React from 'react'
import { LoginButton, FollowButton, FollowButtonSm } from './components/common/Button'
import { ResetStyle } from './style/ResetStyle'
import {GlobalStyle} from './style/GlobalStyle'
import { NavBar } from './components/common/NavBar'
import InputTest from './componentsTest/InputTest'
import SaleItemTest from './componentsTest/SaleItemTest'
import UserPostList from './components/UserPostList/UserPostList'

function App() {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <LoginButton contents={'로그인'}/>
        <FollowButton contents={'팔로우'}/>
        <FollowButtonSm contents={'팔로우'}/>
        <NavBar />
        <InputTest />
        <SaleItemTest />
        <UserPostList />
    </>

  )
}

export default App


