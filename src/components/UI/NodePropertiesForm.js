import React from 'react'
import styled from 'styled-components'
import Field from './Field'

const Container = styled.div`
  background: ${ props => props.theme.ui.node.edit.background };
  padding: 20px;
`

export default ({ properties, fields }) => (
  <Container>
    { fields
        .filter(field => field.collection === false)
        .map(field => (
          <Field
            key={field.id}
            field={field}
            value={properties[field.name]}
          />
        ))
    }
  </Container>
)
