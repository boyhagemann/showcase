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

export const PROJECT_CREATE = 'project.create'
export const PROJECT_REMOVE = 'project.remove'

export const create = () => (dispatch, getState) => {

  const projectId = uuidv4()
  const nodeId = uuidv4()
  const typeId = 'project'
  const userId = null

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

    case PROJECT_REMOVE:
      return normalize(state.list.filter(project => project.id !== action.id))

    default:
      return state
  }
}
