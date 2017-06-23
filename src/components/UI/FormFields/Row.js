import React from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  padding-bottom: 5px;
`

const Label = styled.label`
  font-family: ${ props => props.theme.ui.fonts.default };
  color: ${ props => props.theme.ui.colors.amsterdam };
`

const FieldWrapper = styled.div`
`

const Row = styled.div`
  width: 100%;
  padding: 10px 0;
`

export default ({ component, label }) => (
  <Row>
    <LabelWrapper>
      <Label>{ label }</Label>
    </LabelWrapper>
    <FieldWrapper>
      { component }
    </FieldWrapper>
  </Row>
)
