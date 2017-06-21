import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import NodesContainer from './NodesContainer'
import ProjectDashboard from './ProjectDashboard'
import ProjectMenu from './ProjectMenu'
import Preview from './Preview'
import Publish from './Publish'
import Payment from './Payment'
import FlashMessagesContainer from './FlashMessagesContainer'
import RedirectWithMessage from './RedirectWithMessage'

const Project = styled.div`
`

export default ({ project }) => project ? (
  <Project>
    <ProjectMenu {...project} />
    <FlashMessagesContainer />
    <Route
      exact
      path={`/projects/${project.id}`}
      component={ () => <ProjectDashboard project={project} /> }
    />
    <Route
      path={`/projects/${project.id}/nodes/:node?/:field?`}
      component={ props => <NodesContainer project={project} {...props} /> }
    />
    <Route
      exact
      path={`/projects/${project.id}/preview`}
      component={ () => <Preview {...project} />}
    />
    <Route
      exact
      path={`/projects/${project.id}/publish`}
      component={ () => <Publish {...project} />}
    />
    <Route
      exact
      path={`/projects/${project.id}/payment`}
      component={ () => <Payment {...project} />}
    />
  </Project>
) : (
  <RedirectWithMessage to="/projects" message="Project does not exist" status="negative" />
)
