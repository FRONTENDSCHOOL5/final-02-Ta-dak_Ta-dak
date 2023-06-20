import styled from 'styled-components'

import CommonComponents from './componentsTest/CommonComponents'
import PageTest from './componentsTest/PageTest'
import FeedHomePage from './pages/FeedHomePage'
import SplashPage from './pages/SplashPage'
import ProductDtailModal from './components/common/ProductDtailModal'

function App() {
  return (
      <WrapperStyle>
        <BaseSizeStyle>
      {/* <CommonComponents /> */}
      {/* <PageTest /> */}
      <ProductDtailModal/>
      {/* <FeedHomePage /> */}
      {/* <SplashPage/> */}
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