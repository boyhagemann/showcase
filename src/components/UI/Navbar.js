import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import Grid from './Grid'
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


export default ({ isAuthenticated }) => (
  <Navbar>
    <MaxWidth>
      <Grid
        left={
          <div>
            <NavbarLink to={`/`}><FormattedMessage id="navbar.menu.home" /></NavbarLink>
            { isAuthenticated && <NavbarLink to={`/projects`}><FormattedMessage id="navbar.menu.projects" /></NavbarLink> }
          </div>
        }
        right={
          <div>
            { !isAuthenticated && <NavbarLink to={`/login`}><FormattedMessage id="navbar.menu.login" /></NavbarLink> }
            { !isAuthenticated && <NavbarLink to={`/signup`}><FormattedMessage id="navbar.menu.signup" /></NavbarLink> }
            { isAuthenticated && <NavbarLink to={`/account`}><FormattedMessage id="navbar.menu.account" /></NavbarLink> }
            { isAuthenticated && <NavbarLink to={`/logout`}><FormattedMessage id="navbar.menu.logout" /></NavbarLink> }
          </div>
        }
      />
    </MaxWidth>
  </Navbar>
)
