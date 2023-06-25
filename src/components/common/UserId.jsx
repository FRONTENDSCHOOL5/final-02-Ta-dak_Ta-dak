import styled from 'styled-components'

export default function UserId({ id }) {
  return (
    <UserIdStyled>
      @ {id}
    </ UserIdStyled>
  )
}

const UserIdStyled = styled.div`
    color: var(--text-color-2);
    font-size: var(--font--size-sm);
`;
