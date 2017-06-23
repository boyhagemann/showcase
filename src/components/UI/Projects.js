import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import Grid from './Grid'
import Heading from './Heading'
import Button from './Button'
import MaxWidth from './MaxWidth'
import FlashMessagesContainer from './FlashMessagesContainer'
import { FormattedMessage } from 'react-intl'

const Header = styled.div`
  margin: 50px 0;
`

const HeadingLink = styled(Link)`
  color: ${ props => props.theme.ui.projects.card.heading.color };
  text-decoration: none;
`

const Card = Box.extend`
  width: ${ props => props.theme.ui.projects.card.width };
  padding: 10px;
`

const CardHeader = styled.div`
  background: ${ props => props.theme.ui.projects.card.header.background };
  padding: 10px;
`

const Content = styled.div`
  background: ${ props => props.theme.ui.projects.card.content.background };
  padding: 10px;
`


export default ({ projects, create, remove }) => (
  <MaxWidth>

    <FlashMessagesContainer />

    <Header>
      <Grid
        left={<Heading><FormattedMessage id="projects.heading" /></Heading>}
        right={(
          <Button
            primary
            large
            onClick={create}
          >
            <FormattedMessage id="home.visual.actions.create-project" />
          </Button>
        )}
      />
    </Header>

    { projects.map( ({ id, label, status }) => (
      <Card key={id}>
        <CardHeader>
          <HeadingLink to={`/projects/${id}`}>{ label }</HeadingLink>
        </CardHeader>
        <Content>
          <div>{ status }</div>
          <Grid
            left={(
              <ButtonLink small border to={`/projects/${id}`}>
                <FormattedMessage id="projects.item.actions.manage" />
              </ButtonLink>
            )}
            right={(
              <Button
                small
                negative
                onClick={() => remove(id)}
                >
                Remove
              </Button>              
            )}
          />

        </Content>
      </Card>
    )) }

  </MaxWidth>
)
