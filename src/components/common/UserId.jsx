 import styled from 'styled-components'
 import React from 'react'
 
 export default function UserId({id}) {
   return (
    <UserIdstyled>
      @ {id}
    </ UserIdstyled>
   )
 }

const UserIdstyled = styled.div`
    color: var(--basic-color-7);
    font-size: var(--font--size-sm);
`;
