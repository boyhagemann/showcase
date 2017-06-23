import nodes from '../data/nodes'
import { fromArray } from '../utils'
import { getNextOrder } from '../utils/nodes'
import uuidv4 from 'uuid/v4'
import { PROJECT_REMOVE } from './projects'

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

export const add = data => ({
  type: NODE_ADD,
  id: uuidv4(),
  ...data
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
      return (state.edit && state.edit === action.id)
        ? { ...state, edit: null }
        : { ...state, edit: action.id }

    case NODE_PROPERTY_CHANGE:

      const { edit, list } = state

      const changed = list
        .map(node => {
          if(node.id !== action.id) return node

          const properties = {
            ...node.properties,
            [action.name]: action.value
          }

          return { ...node, properties }
        })

      return { ...normalize(changed), edit }

    case PROJECT_REMOVE:
      return normalize(state.list.filter(node => node.project === action.id))

    default:
      return state
  }
}
