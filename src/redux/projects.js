import projects from '../data/projects'
import uuidv4 from 'uuid/v4'
import { fromArray } from '../utils'
import { createRootNode } from './nodes'
import { push } from 'react-router-redux'

const normalize = projects => ({
  list: projects,
  byId: fromArray(projects)
})

const defaultState = normalize(projects)

const PROJECT_CREATE = 'project.create'
const PROJECT_REMOVE = 'project.remove'

export const create = () => (dispatch, getState) => {
  const projectId = uuidv4()
  const nodeId = uuidv4()
  const typeId = 'project'

  // const email = getState().auth.credentials.email
  // const users = getState().users.byEmail
  // const user = users[email]
  const userId = null

  // console.log(user)

  dispatch(createProject(projectId, nodeId, 'New project', userId))
  dispatch(createRootNode(nodeId, projectId, typeId))
  dispatch(push(`/projects/${projectId}/nodes`))


}

export const createProject = (id, rootNode, label, user) => ({
  type: PROJECT_CREATE,
  id,
  rootNode,
  label,
  user,
})

export const remove = id => ({ type: PROJECT_REMOVE, id })

export default (state = defaultState, action) => {

  switch(action.type) {

    case PROJECT_CREATE:
      const { type, ...project } = action

      const newList = [ ...state.list, project ]

      return normalize(newList)

    default:
      return state
  }
}
