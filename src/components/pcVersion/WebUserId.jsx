import styled from 'styled-components'

export default function WebUserId({ id }) {
  return (
    <WebUserIdStyled>
      @ {id}
    </ WebUserIdStyled>
  )
}

const WebUserIdStyled = styled.div`
    color: var(--text-color-2);
    font-size: var(--font--size-Lg);
`;
