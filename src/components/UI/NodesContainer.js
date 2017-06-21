import Nodes from './Nodes'
import { connect } from 'react-redux'
import { add, remove } from '../../redux/nodes'

const getCurrentNode = (state, project, match) => {
  const id = match.params.node || project.rootNode
  return state.nodes.byId[id]
}

const getCurrentField = (state, node, match) => {

    const type = state.types.byId[node.type]

    const id = match.params.field || type.defaultField
    return state.fields.byId[id]
}

const getChildren = (nodes, parent, field) => nodes
  .filter(node => node.parent === parent.id)
  .filter(node => node.field === field.id)
  .sort( (a, b) => a.order - b.order)

const mapStateToProps = (state, { project, match }) => {

  const fields = state.fields.list
  const types = state.types.byId
  const node = getCurrentNode(state, project, match)
  const field = node && getCurrentField(state, node, match)
  const nodes = node && getChildren(state.nodes.list, node, field)

  return { nodes, node, field, types, fields }
}

const mapDispatchToProps = dispatch => ({
  add: (project, field, parent, typeId, properties) => () => dispatch(add(project, field, parent, typeId, properties)),
  remove: id => dispatch(remove(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nodes)
