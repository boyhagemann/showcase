import React from 'react'
import Box from '../Box'
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import MaxWidth from './MaxWidth'
import FlashMessagesContainer from './FlashMessagesContainer'
import { FormattedMessage } from 'react-intl'

const Card = Box.extend`
  width: ${ props => props.theme.ui.projects.card.width };
  background: ${ props => props.theme.ui.projects.card.background };
  padding: ${ props => props.theme.ui.projects.card.padding };
`

export default ({ projects }) => (
  <MaxWidth>

    <FlashMessagesContainer />

    <h1><FormattedMessage id="projects.heading" /></h1>

    { projects.map( ({ id, label, status }) => (
      <Card key={id}>
        <h3>
          <Link to={`/projects/${id}`}>{ label }</Link>
          <div>{ status }</div>
          <ButtonLink small primary to={`/projects/${id}`}><FormattedMessage id="projects.item.actions.manage" /></ButtonLink>
        </h3>
      </Card>
    )) }

  </MaxWidth>
)
