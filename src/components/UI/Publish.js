import React from 'react'
import ButtonLink from './ButtonLink'

export default ({ id }) => (
  <div>
    <h1>Publish</h1>

    <h3>Are you ready to publish your page?</h3>

    <div>
      <ButtonLink to={`/projects/${id}/payment`} primary>Yes!</ButtonLink>
      <ButtonLink to={`/projects/${id}`}>No!</ButtonLink>
    </div>
  </div>
)
