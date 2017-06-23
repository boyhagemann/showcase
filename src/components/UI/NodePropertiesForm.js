import React from 'react'
import styled from 'styled-components'
import PropertyFieldContainer from './PropertyFieldContainer'

const Form = styled.form`
  background: ${ props => props.theme.ui.node.edit.background };
  padding: 20px;
`

export default ({ id, properties, fields }) => (
  <Form>
    { fields
        .filter(field => field.collection === false)
        .map(field => (
          <PropertyFieldContainer
            key={field.id}
            id={id}
            field={field}
            value={properties[field.name]}
          />
        ))
    }
  </Form>
)
