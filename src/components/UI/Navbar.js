import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import Box from '../Box'
import MaxWidth from './MaxWidth'
import { FormattedMessage } from 'react-intl'

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
  padding: 5px 0;
  font-family: ${ props => props.theme.ui.fonts.default };
`

const NavbarLink = ButtonLink.extend`
  	background: none;
    color: #666
`

const Left = Box.extend`
  width: ${ props => props.theme.ui.navbar.left.width };
`

const Right = Box.extend`
  text-align: ${ props => props.theme.ui.navbar.right.align };
  width: ${ props => props.theme.ui.navbar.right.width };
`

export default ({ isAuthenticated }) => (
  <Navbar>
    <MaxWidth>
      <Left>
        <NavbarLink to={`/`}><FormattedMessage id="navbar.menu.home" /></NavbarLink>
        { isAuthenticated && <NavbarLink to={`/projects`}><FormattedMessage id="navbar.menu.projects" /></NavbarLink> }
      </Left>
      <Right>
        { !isAuthenticated && <NavbarLink to={`/login`}><FormattedMessage id="navbar.menu.login" /></NavbarLink> }
        { !isAuthenticated && <NavbarLink to={`/signup`}><FormattedMessage id="navbar.menu.signup" /></NavbarLink> }
        { isAuthenticated && <NavbarLink to={`/account`}><FormattedMessage id="navbar.menu.account" /></NavbarLink> }
        { isAuthenticated && <NavbarLink to={`/logout`}><FormattedMessage id="navbar.menu.logout" /></NavbarLink> }
      </Right>
    </MaxWidth>
  </Navbar>
)
