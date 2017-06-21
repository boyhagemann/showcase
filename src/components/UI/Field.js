import React from 'react'
import styled from 'styled-components'
import Box from '../Box'

const Row = styled.div`
  width: 100%;
`

const Left = Box.extend`
  width: 30%;
  text-align: right;
  padding: 5px;
`
const Content = Box.extend`
  width: 50%;
  padding: 5px;
`

const Input = styled.input`
  padding: 5px;
  border: none;
  width: 100%;
`

const TextArea = styled.textarea`
  padding: 5px;
  border: none;
  width: 100%;
`

const Label = styled.label``

const renderField = (accepts, value) => {
  switch(accepts) {

    case 'string':
      return <Input type="text" defaultValue={value} />

    case 'text':
      return <TextArea rows={5} defaultValue={value} />
  }
}

export default ({ field, value }) => (
  <Row>
    <Left>
      <Label>{ field.label }</Label>
    </Left>
    <Content>
      { renderField(field.accepts, value) }
    </Content>
  </Row>
)
