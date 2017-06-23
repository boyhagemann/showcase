import nodes from '../data/nodes'
import { fromArray } from '../utils'
import { getNextOrder } from '../utils/nodes'
import uuidv4 from 'uuid/v4'
import Immutable from 'immutable'

const normalize = (nodes, fields) => ({
  list: nodes,
  byId: fromArray(nodes),
})

const defaultState = normalize(nodes)

export const NODE_LIST = 'node.list'
export const NODE_LIST_ERROR = 'node.list.error'
export const NODE_LIST_SUCCESS = 'node.list.success'

export const NODE_ADD = 'node.add'
export const NODE_REMOVE = 'node.remove'
export const NODE_TOGGLE_EDIT = 'node.toggle.edit'
export const NODE_PROPERTY_CHANGE = 'node.property.change'

export const list = project => dispatch => {

  dispatch(listSuccess(nodes))

  // dispatch(listError('Some error'))

  return { type: NODE_LIST }
}

const listSuccess = nodes => ({ type: NODE_LIST_SUCCESS, nodes })
// const listError = error => ({ type: NODE_LIST_ERROR, error })

export const createRootNode = (id, project, typeId) => ({
  type: NODE_ADD,
  id,
  project,
  typeId,
})

export const add = (project, field, parent, typeId, properties = {}) => ({
  type: NODE_ADD,
  id: uuidv4(),
  project,
  typeId,
  properties,
  parent,
  field,
})

export const remove = id => ({ type: NODE_REMOVE, id })

export const toggleEdit = id => ({ type: NODE_TOGGLE_EDIT, id})

export const change = (id, name, value) => ({
  type: NODE_PROPERTY_CHANGE, id, name, value
})

export default (state = defaultState, action) => {

  switch(action.type) {

    case NODE_LIST:
      return state

    case NODE_LIST_SUCCESS:
      return normalize(action.nodes)

    case NODE_LIST_ERROR:
      return state

    case NODE_ADD:

      const { type, typeId, ...data } = action

      return normalize([ ...state.list, {
        ...data,
        type: action.typeId,
        order: getNextOrder(data.parent, data.field, state.list),
      }])

    case NODE_REMOVE:

      const newList = state.list
        .filter(node => node.id !== action.id)

      return normalize(newList)

    case NODE_TOGGLE_EDIT:
      console.log(action)
      return (state.edit && state.edit === action.id)
        ? { ...state, edit: null }
        : { ...state, edit: action.id }

    case NODE_PROPERTY_CHANGE:
      const changed = state.list
        .map(node => {
          if(node.id !== action.id) return node

          const properties = {
            ...node.properties,
            [action.name]: action.value
          }

          return { ...node, properties }
        })

      console.log(state.edit)

      return { ...normalize(changed), edit: state.edit }

    default:
      return state
  }
}
