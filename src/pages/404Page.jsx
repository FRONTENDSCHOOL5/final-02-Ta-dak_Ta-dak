import styled from 'styled-components';

import { ReactComponent as SleepBonFire } from '../assets/img/sleepbonfire.svg';
import { ReactComponent as CantFindPage } from '../assets/img/cant-find-page.svg';
import { GreenBackBtn } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <>
    <Page404Wrapper>
      <SleepBonFire />
      <CantFindPage />
      <GreenBackBtn handleFunc={handleGoBack} type='button' contents={'이전 페이지'} />
    </Page404Wrapper>
    </>
  )
}
  
const Page404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);

  svg {
    margin: 10px;
  }

  button {
    margin: 10px;
  }
`;