import React from 'react'
import { ResetStyle } from './style/ResetStyle'
import {GlobalStyle} from './style/GlobalStyle'
import { NavBar } from './components/common/NavBar'
import InputTest from './componentsTest/InputTest'
import UserPostList from './components/UserPostList/UserPostList'
import { Profile } from './components/common/Profile'
import {Modal} from './components/common/Modal'
import {Alert} from './components/common/Alert'
import ComponentsTest from './componentsTest/ComponentsTest'


function App() {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <NavBar />
        <InputTest />
        <Profile />
        <Modal />
        <Alert />
        <ComponentsTest />
        <UserPostList />
    </>

  )
}

export default App

