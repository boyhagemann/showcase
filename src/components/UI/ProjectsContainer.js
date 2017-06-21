import { connect } from 'react-redux'
import Projects from './Projects'

const mapStateToProps = state => ({
  projects: state.projects.list,
})

export default connect(mapStateToProps)(Projects)
