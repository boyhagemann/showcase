import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import Login from './Login'
import ProjectsContainer from './ProjectsContainer'
import ProjectContainer from './ProjectContainer'
import NavbarContainer from './NavbarContainer'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const Content = styled.div`
  padding-top: 40px;
`

const logoutAndRedirect = logout => {
  logout()
  return null
}

export default ({ isAuthenticated, logout }) => (
  <Router>
    <Content>
      <NavbarContainer />
      <Route exact path="/" component={Home} />
      <PublicRoute isAuthenticated={isAuthenticated} exact path="/login" component={Login} />
      <PrivateRoute isAuthenticated={isAuthenticated} exact path="/logout" component={() => logoutAndRedirect(logout)} />
      <PrivateRoute isAuthenticated={isAuthenticated} exact path="/projects" component={ProjectsContainer} />
      <PrivateRoute isAuthenticated={isAuthenticated} path="/projects/:project" component={ProjectContainer} />
    </Content>
  </Router>
)
