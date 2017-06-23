import React from 'react'
import Box from '../Box'
import TextInput from './FormFields/TextInput'
import TextArea from './FormFields/TextArea'
import Row from './FormFields/Row'

const renderField = (accepts, name, value, change) => {
  switch(accepts) {

    case 'string':
      return <TextInput
        type="text"
        name={name}
        defaultValue={value}
        onChange={change}
      />

    case 'text':
      return <TextArea
        rows={5}
        name={name}
        defaultValue={value}
        onChange={change}
       />
  }
}

export default ({ field, value, change }) => (
  <Row
    component={renderField(field.accepts, field.name, value, change)}
    label={field.label}
  />
)