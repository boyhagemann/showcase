import React from 'react'
import styled from 'styled-components'
import Node from './Node'

const Grid = styled.div`
  background: ${ props => props.theme.grid.background };
`

const Column = styled.div`
  display: inline-box;
  box-sizing: border-box;
  width: ${ (props) => props.width * 100 + '%' }
`

export default ({ id, column1 = [], column2 = [], column3 = []}) => (
  <Grid key={id}>
    <Column width={1/3}>{ column1.map(id => <Node key={id} id={id} />) }</Column>
    <Column width={1/3}>{ column2.map(id => <Node key={id} id={id} />) }</Column>
    <Column width={1/3}>{ column3.map(id => <Node key={id} id={id} />) }</Column>
  </Grid>
)
