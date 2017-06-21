import { connect } from 'react-redux'
import Project from './Project'

const mapStateToProps = (state, { match }) => ({
  project: state.projects.byId[match.params.project],
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
