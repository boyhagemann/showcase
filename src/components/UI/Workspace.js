import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import styled from 'styled-components'
import HomeContainer from './HomeContainer'
import Login from './Login'
import ProjectsContainer from './ProjectsContainer'
import ProjectContainer from './ProjectContainer'
import NavbarContainer from './NavbarContainer'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import history from '../../redux/routerHistory'

const Content = styled.div`
  padding-top: 40px;
  font-family: ${ props => props.theme.ui.fonts.default };
  font-size: ${ props => props.theme.ui.fontSizes.default };
  line-heigth: ${ props => props.theme.ui.fontSizes.default };
`

const logoutAndRedirect = logout => {
  logout()
  return null
}

export default ({ isAuthenticated, logout }) => (
  <ConnectedRouter history={history} basename={process.env.BASE_URL}>
      <Content>
        <NavbarContainer />
        <Route exact path="/" component={HomeContainer} />
        <PublicRoute isAuthenticated={isAuthenticated} exact path="/login" component={Login} />
        <PrivateRoute isAuthenticated={isAuthenticated} exact path="/logout" component={() => logoutAndRedirect(logout)} />
        <PrivateRoute isAuthenticated={isAuthenticated} exact path="/projects" component={ProjectsContainer} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/projects/:project" component={ProjectContainer} />
      </Content>
  </ConnectedRouter>
)
