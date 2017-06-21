import React from 'react'
import styled from 'styled-components'
import Node from '../../renderer/Node'

const Preview = styled.div`
`
export default ({ id, rootNode }) => (
  <Preview>
    <Node id={rootNode} />
  </Preview>
)
