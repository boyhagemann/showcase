import projects from '../data/projects'
import { fromArray } from '../utils'

const defaultState = {
  list: projects,
  byId: fromArray(projects)
}

const PROJECT_REMOVE = 'project.remove'

export const remove = id => ({
  type: PROJECT_REMOVE,
  payload: id
})

export default (state = defaultState, action) => {

  switch(action.type) {

    default:
      return state
  }
}
