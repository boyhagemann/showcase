import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/projects',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
