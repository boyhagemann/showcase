import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { composeWithDevTools } from 'remote-redux-devtools'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'
import { injectGlobal } from 'styled-components'
import { routerMiddleware } from 'react-router-redux'

import Responsive from './Responsive'
import ResponsiveThemeProvider from './ResponsiveThemeProvider'

import WorkspaceContainer from './UI/WorkspaceContainer'

import reducers from '../redux'
import messages from '../data/translations'
import history from '../redux/routerHistory'

injectGlobal([`
  body {
    margin: 0;
    background: #edefe6;
    font-size: 16px;
  }
`])


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  ),
  autoRehydrate()
))

// begin periodically persisting the store
persistStore(store)
  // .purge()

const App = () => (
  <Provider store={store}>
    <Responsive>
      <ResponsiveThemeProvider>
        <IntlProvider locale="en" key="en" messages={messages}>
          <WorkspaceContainer />
        </IntlProvider>
      </ResponsiveThemeProvider>
    </Responsive>
  </Provider>
)

export default App;
