import React from 'react'
import styled from 'styled-components'
import Node from './Node'

const Project = styled.div`
`

export default ({ content = [] }) => (
  <Project>
    { content.map(id => <Node key={id} id={id} />) }
  </Project>
)
