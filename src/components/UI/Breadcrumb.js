import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import Color from 'color'
import MaxWidth from './MaxWidth'
import Box from '../Box'

const Container = styled.div`
  margin-top: 25px;
`

const Item = ButtonLink.extend`
  background: ${ props => Color(props.theme.ui.colors.canvas).darken(0.1).string() };
  margin-right: 5px;
`
const Label = Box.extend`
  padding: 7px;
`

const renderItem = (node, nodes, types) => {

  const parent = nodes[node.parent]
  const label = parent.label || types[parent.type].label

  return <Item key={`${parent.id}`} to={`/projects/${parent.project}/nodes/${node.parent}/${node.field}`}>{ label }</Item>
}

export default ({ path = [], node, types, nodes }) => path.length ? (
  <MaxWidth>
    <Container>
      { path.map(node => renderItem(node, nodes, types)) }
      <Label>{ node.label || types[node.type].label }</Label>
    </Container>
  </MaxWidth>
) : null
