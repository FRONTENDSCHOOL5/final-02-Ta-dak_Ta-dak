import styled from 'styled-components'

import CommonComponents from './componentsTest/CommonComponents'
import PageTest from './componentsTest/PageTest'
import FeedHomePage from './pages/FeedHomePage'

function App() {
  return (
      <WrapperStyle>
      {/* <CommonComponents /> */}
      <PageTest />
      {/* <FeedHomePage /> */}
      </WrapperStyle>
  )
}

export default App

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
`