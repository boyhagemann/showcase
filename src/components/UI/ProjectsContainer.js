import { connect } from 'react-redux'
import Projects from './Projects'
import { create, remove } from '../../redux/projects'

const mapStateToProps = state => ({
  projects: state.projects.list,
})

const mapDispatchToProps = dispatch => ({
  create: () => dispatch(create()),
  remove: id => dispatch(remove(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
