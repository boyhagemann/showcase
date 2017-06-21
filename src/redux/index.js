import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import nodes from './nodes'
import types from './types'
import fields from './fields'
import projects from './projects'
import notifications from './notifications'

export default combineReducers({
  auth,
  nodes,
  types,
  fields,
  projects,
  notifications,
  form: formReducer
 })
