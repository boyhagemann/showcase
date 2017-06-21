import { setToken, getToken, clearToken } from '../utils/auth'

const defaultState = {
  loading: false,
  isAuthenticated: getToken(),
  token: getToken(),
  error: '',
}

const AUTH_LOGIN = 'auth.login'
const AUTH_SUCCESS = 'auth.success'
const AUTH_ERROR = 'auth.error'
const AUTH_LOGOUT = 'auth.logout'

export const login = (username, password) => dispatch => {
  dispatch(start())
  dispatch(success('some-token'));
}

const start = () => ({
  type: AUTH_LOGIN,
})

const success = token => {
  setToken(token)
  return ({
    type: AUTH_SUCCESS,
    token
  })
}

export const logout = dispatch => {
  clearToken()
  return ({
    type: AUTH_LOGOUT
  })
}

export default (state = defaultState, action) => {

  switch(action.type) {

    case AUTH_LOGIN:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        token: '',
        error: '',
      }

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.token,
        error: '',
      }

    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: '',
        error: action.error,
      }

    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: '',
        error: ''
      }

    default:
      return state
  }
}
