import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import { injectGlobal } from 'styled-components'

import Responsive from './Responsive'
import ResponsiveThemeProvider from './ResponsiveThemeProvider'

import WorkspaceContainer from './UI/WorkspaceContainer'

import reducers from '../redux'
import messages from '../data/translations'

injectGlobal([`
  body {
    margin: 0;
    background: #edefe6;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
  }
`])

const store = createStore(reducers, composeWithDevTools(applyMiddleware(
  thunk
)))

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
