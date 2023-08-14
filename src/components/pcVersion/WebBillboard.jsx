import { useLocation } from "react-router-dom";
import styled from "styled-components"

export default function WebBillboard() {

  const location = useLocation();

  return (
    <>
    {location.pathname !== '/feed' && location.pathname !== '/recommendfeed' && location.pathname !== '/profile' && 
    <AreaOccupy>
    </AreaOccupy>
    }
    </>
  )
}

const AreaOccupy = styled.div`
  width: 392px;
`;
