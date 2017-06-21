import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import nodes from './nodes'
import types from './types'
import fields from './fields'
import projects from './projects'
import users from './users'
import notifications from './notifications'

export default combineReducers({
  auth,
  nodes,
  types,
  fields,
  projects,
  users,
  notifications,
  form: formReducer,
  router: routerReducer,
 })
