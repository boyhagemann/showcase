import React from 'react'
import ButtonLink from './ButtonLink'

export default ({ id }) => (
  <div>
    <h1>Payment</h1>

    <h3>Please pay me $2 right now</h3>

    <div>
      <label>Choose your payment type</label>
      <ButtonLink to={`/projects/${id}/ideal`}>Ideal</ButtonLink>
      <ButtonLink>Creditcard</ButtonLink>
    </div>
  </div>
)
