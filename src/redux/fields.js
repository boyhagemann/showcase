import fields from '../data/fields'
import { fromArray } from '../utils'

const normalize = fields => ({
  list: fields,
  byId: fromArray(fields),
})

const defaultState = normalize(fields)

export default (state = defaultState, action) => {

  switch(action.type) {

    default:
      return state
  }
}
