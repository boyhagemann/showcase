import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Text from './Text'
import MaxWidth from './MaxWidth'
import Dropzone from 'react-dropzone'

const Container = styled.div`
  margin: 20px 0;
`

const Zone = styled(Dropzone)`
  border: 2px dashed #ddd;
  padding: 20px;
  text-align: center;
`

const Upload = Button.extend`
  margin: 0;
`

const Description = Text.extend`
  margin-bottom: 0;
`

export default ({ title, description, add }) => (
  <Container>
    <MaxWidth>
        <Zone activeStyle={{ background: 'green'}} onDrop={ (accepted, rejected) => {
            accepted.map(file => add(file))
          }}>
          <Upload>{ title }</Upload>
          <Description>{ description }</Description>
        </Zone>
    </MaxWidth>
  </Container>
)
