import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Text from './Text'
import MaxWidth from './MaxWidth'

const Container = styled.div`
  margin: 20px 0;
`

const Zone = styled.div`
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

export default ({ title, description }) => (
  <Container>
    <MaxWidth>
      <Zone>
        <Upload>{ title }</Upload>
        <Description>{ description }</Description>
      </Zone>
    </MaxWidth>
  </Container>
)
