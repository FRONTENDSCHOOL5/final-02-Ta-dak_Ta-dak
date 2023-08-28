import { useLocation } from "react-router-dom";
import styled from "styled-components"

export default function WebBillboard() {

  const location = useLocation();
  const hideBillboardPaths = [
    '/splash',
    '/login',
    '/signup',
    '/signup/profile',
    '/feed',
    '/recommendfeed',
    '/profile'
  ]

  const hideBillboard = hideBillboardPaths.includes(location.pathname);
  return (
    <>
      {!hideBillboard &&
        <AreaOccupy>
        </AreaOccupy>
      }
    </>
  )
}

const AreaOccupy = styled.div`
  width: 392px;
`;
