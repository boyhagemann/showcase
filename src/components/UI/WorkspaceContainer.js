import { connect } from 'react-redux'
import Workspace from './Workspace'
import { logout } from '../../redux/auth'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
