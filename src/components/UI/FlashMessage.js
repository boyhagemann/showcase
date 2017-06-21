import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${ props => props.theme.ui.notification[props.status].text };
  background: ${ props => props.theme.ui.notification[props.status].background };
  padding: 10px;
  margin: 15px 0;
`

const Remove = styled.button`
  color: ${ props => props.theme.ui.notification[props.status].close };
  float: right;
  background: none;
  border: none;
  &:hover {
    color: ${ props => props.theme.ui.notification[props.status].text };
  }
`

export default ({ id, message, status, remove }) => (
  <Container key={id} status={status}>
    { message }
    <Remove type="button" status={status} onClick={remove}>X</Remove>
  </Container>
)
