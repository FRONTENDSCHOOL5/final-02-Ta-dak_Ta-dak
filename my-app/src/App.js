import React from 'react'

import { LoginButton, FollowButton, FollowButtonSm } from './components/common/Button'
import { ResetStyle } from './style/ResetStyle'
import {GlobalStyle} from './style/GlobalStyle'

function App() {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <LoginButton contents={'로그인'}/>
        <FollowButton contents={'팔로우'}/>
        <FollowButtonSm contents={'팔로우'}/>
    </>

  )
}

export default App


