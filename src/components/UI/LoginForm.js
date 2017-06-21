import React from 'react'
import { Field } from 'redux-form'
import Button from './Button'

export default ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>

      <div>
        <Field
          name="email"
          type="text"
          component="input"
        />
      </div>

      <div>
        <Field
          name="password"
          type="password"
          component="input"
        />
      </div>

      <Button primary type="submit">Login</Button>

    </form>
)
