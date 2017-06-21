import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import ButtonLink from './ButtonLink'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import MaxWidth from './MaxWidth'
import Color from 'color'
import { FormattedMessage } from 'react-intl'


const renderButton = ({ primary, secondary, tertiary, small, large, ...props}) => <NavLink activeClassName="active" {...props} />

const Link = Button
  .withComponent(renderButton)
  .extend`
    &.active {
      background: ${ props => Color(props.theme.ui.colors.amsterdam).lighten(0.1).string() };
    }
  `

const Row = styled.div`
  background: ${ props => props.theme.ui.nodeActions.row.background };
  padding: ${ props => props.theme.ui.nodeActions.row.padding };
`

const Left = Box.extend`
  width: ${ props => props.theme.ui.nodeActions.left.width };
  padding-top: 12px;
`

const Right = Box.extend`
  width: ${ props => props.theme.ui.nodeActions.right.width };
  text-align: ${ props => props.theme.ui.nodeActions.right.textAlign };
`

export default ({ id }) => (
  <Row>
    <MaxWidth>
      <Left>
        <Link exact to={`/projects/${id}`} tertiary ><FormattedMessage id="project.menu.dashboard" /></Link>
        <Link to={`/projects/${id}/nodes`} tertiary ><FormattedMessage id="project.menu.content" /></Link>
        <Link to={`/projects/${id}/preview`} tertiary><FormattedMessage id="project.menu.preview" /></Link>
        <Button tertiary><FormattedMessage id="project.menu.theme" /></Button>
      </Left>
      <Right>
        <ButtonLink to={`/projects/${id}/publish`} primary large><FormattedMessage id="project.menu.publish" /></ButtonLink>
      </Right>
    </MaxWidth>
  </Row>
)
