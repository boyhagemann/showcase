import { connect } from 'react-redux'
import { add } from '../../redux/nodes'
import NodeActions from './NodeActions'

const mapDispatchToProps = (dispatch, { project, node, field }) => ({
  add: typeId => () => dispatch(add({
    project: project.id,
    field: field.id,
    parent: node.id,
    typeId,
  }))
})

export default connect(null, mapDispatchToProps)(NodeActions)
