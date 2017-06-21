import { connect } from 'react-redux'
import Home from './Home'
import { create } from '../../redux/projects'

const mapDispatchToProps = dispatch => ({
  create: () => dispatch(create()),
})

export default connect(null, mapDispatchToProps)(Home)
