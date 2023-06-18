import styled from 'styled-components'

import CommonComponents from './componentsTest/CommonComponents'
import PageTest from './componentsTest/PageTest'
import FeedHomePage from './pages/FeedHomePage'

function App() {
  return (
      <WrapperStyle>
        <BaseSizeStyle>
      {/* <CommonComponents /> */}
      <PageTest />
      {/* <FeedHomePage /> */}
        </BaseSizeStyle>
      </WrapperStyle>
  )
}

export default App

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const BaseSizeStyle = styled.div`
  overflow: hidden;
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);
`;