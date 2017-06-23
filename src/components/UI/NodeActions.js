import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const NodeActions = styled.div`
  margin-top: 20px;
  text-align: center;
  > ${Button} {
    margin-right: 3px;
  }
`

export default ({ add }) => (
  <NodeActions>
    <Button onClick={add('grid-1x1x1')}>Add a Grid</Button>
    <Button onClick={add('info')}>Add an Info block</Button>
  </NodeActions>
)
