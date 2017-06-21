import types from '../data/types'
import { fromArray } from '../utils'

const normalize = types => ({
  list: types,
  byId: fromArray(types),
})

const defaultState = normalize(types)

export default (state = defaultState, action) => {

  switch(action.type) {

    default:
      return state
  }
}
