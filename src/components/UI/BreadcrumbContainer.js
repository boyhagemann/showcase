import Breadcrumb from './Breadcrumb'
import { connect } from 'react-redux'
import { getPath } from '../../utils/nodes'

const mapStateToProps = (state, { node }) => ({
  path: getPath(node, state.nodes.byId),
  types: state.types.byId,
  nodes: state.nodes.byId
})

export default connect(mapStateToProps)(Breadcrumb)
