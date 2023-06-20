import styled from 'styled-components';

import {ReactComponent as Xbutton}from '../../assets/img/x.svg'

export default function ProductDtailModal() {

  return (
    <ProductDtailModalStyle>
      <XbuttonStyle/>
    </ProductDtailModalStyle>
  )
}

const ProductDtailModalStyle = styled.div`
// test 잘보이도록 
  margin-top: 150px;
  width: 303px;
  height: 458px;
  background-color: #f5f3f3;
  /* background-color: var(--background-color); */
  border-radius: 20px;
  margin: 0 auto;
`

const XbuttonStyle = styled(Xbutton)`
  position: relative;
  left: 259px
`