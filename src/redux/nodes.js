import nodes from '../data/nodes'
import { fromArray } from '../utils'
import { getNextOrder } from '../utils/nodes'
import uuidv4 from 'uuid/v4'

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

export const list = project => dispatch => {

  dispatch(listSuccess(nodes))

  // dispatch(listError('Some error'))

  return { type: NODE_LIST }
}

const listSuccess = nodes => ({ type: NODE_LIST_SUCCESS, nodes })
// const listError = error => ({ type: NODE_LIST_ERROR, error })

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

export default (state = defaultState, action) => {

  switch(action.type) {

    case NODE_LIST:
      return state

    case NODE_LIST_SUCCESS:
      return normalize(action.nodes)

    case NODE_LIST_ERROR:
      return state

    case NODE_ADD:

      const { type, ...data } = action

      return normalize([ ...state.list, {
        ...data,
        type: action.typeId,
        order: getNextOrder(data.parent, data.field, state.list),
      }])

    case NODE_REMOVE:

      const newList = state.list
        .filter(node => node.id !== action.id)

      return normalize(newList)

    default:
      return state
  }
}
