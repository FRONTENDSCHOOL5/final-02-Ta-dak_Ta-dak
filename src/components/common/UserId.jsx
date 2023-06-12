import styled from 'styled-components'

export default function UserId({ id }) {
  return (
    <UserIdStyled>
      @ {id}
    </ UserIdStyled>
  )
}

const UserIdStyled = styled.div`
    color: var(--basic-color-7);
    font-size: var(--font--size-sm);
`;
