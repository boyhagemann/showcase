import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Navbar)
