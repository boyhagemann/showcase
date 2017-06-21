import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: ${ props => props.theme.ui.maxWidth.width };
`

const Inner = styled.div`
  margin: ${ props => props.theme.ui.maxWidth.margin };
`

export default props => (
  <Outer>
    <Inner { ...props } />
  </Outer>
)
