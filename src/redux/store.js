import reducers from './index'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Add the reducer to your store on the `routing` key
export default createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
