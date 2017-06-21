import users from '../data/users'
import { fromArray } from '../utils'

const defaultState = {
  list: users,
  byId: fromArray(users),
  byEmail: fromArray(users, 'email'),
}

export default (state = defaultState, action) => {

  switch(action.type) {

    default:
      return state
  }
}
