import uuidv4 from 'uuid/v4'

const defaultState = [
  // {
  //   id: 'test',
  //   message: "Some error occured",
  //   status: 'negative',
  // },
  // {
  //   id: 'test2',
  //   message: "Info",
  //   status: 'info',
  // },
  // {
  //   id: 'test3',
  //   message: "Notice",
  //   status: 'notice',
  // },
  // {
  //   id: 'test4',
  //   message: "Your project has been created",
  //   status: 'positive',
  // },
]

export const NOTIFICATIONS_ADD = 'notifications.add'
export const NOTIFICATIONS_REMOVE = 'notifications.remove'

export const add = notification => ({ type: NOTIFICATIONS_ADD, notification })
export const remove = id => ({ type: NOTIFICATIONS_REMOVE, id })

export const notify = (message, status, seconds = 3) => dispatch => {

  const id = uuidv4()
  const notification = { id, message, status }

  dispatch(add(notification))

  setTimeout( () => {
    dispatch(remove(id))
  }, seconds * 1000)
}

export default (state = defaultState, action) => {

  switch(action.type) {

    case NOTIFICATIONS_ADD:
      return [ ...state, action.notification ]

    case NOTIFICATIONS_REMOVE:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}
