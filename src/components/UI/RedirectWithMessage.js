import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { notify } from '../../redux/notifications'

const mapDispatchToProps = dispatch => ({
  notify: (message, status) => dispatch(notify(message, status))
})

const RedirectWithMessage = ({ status, message, to, notify }) => {
  notify(message, status)
  return <Redirect to={to} />
}

export default connect(null, mapDispatchToProps)(RedirectWithMessage)
