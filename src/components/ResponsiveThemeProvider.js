import React from 'react'
import { number } from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Immutable from 'immutable'


import mobile from '../data/themes/default/mobile'
import tablet from '../data/themes/default/tablet'
import desk from '../data/themes/default/desk'

const getTheme = clientWidth => {

  const theme = Immutable.fromJS(mobile)

  if(clientWidth > 1023)
    return theme.mergeDeep(tablet).mergeDeep(desk).toJS()

  if(clientWidth > 799)
    return theme.mergeDeep(tablet).mergeDeep(tablet).toJS()

  return theme.toJS()
}

const ResponsiveThemeProvider = ({children}, { clientWidth }) => (
  <ThemeProvider theme={getTheme(clientWidth)}>{ children }</ThemeProvider>
)

ResponsiveThemeProvider.contextTypes = {
  clientWidth: number.isRequired,
}

export default ResponsiveThemeProvider
