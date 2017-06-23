import React from 'react'
import Box from '../Box'

const Left = Box.extend`
  width: ${ props => props.theme.ui.grid.left.width };
`

const Right = Box.extend`
  width: ${ props => props.theme.ui.grid.right.width };
  text-align: ${ props => props.theme.ui.grid.right.align };
`

export default ({ left, right }) => (
  <div>
    <Left>{ left }</Left>
    <Right>{ right }</Right>
  </div>
)
