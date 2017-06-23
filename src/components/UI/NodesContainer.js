import Nodes from './Nodes'
import { connect } from 'react-redux'
import { remove, toggleEdit } from '../../redux/nodes'

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

  const propertyFields = state.fields.list.filter(field => field.collection === false)
  const collectionFields = state.fields.list.filter(field => field.collection === true)
  const types = state.types.byId
  const node = getCurrentNode(state, project, match)
  const field = node && getCurrentField(state, node, match)
  const nodes = node && getChildren(state.nodes.list, node, field)
  const activeEdit = state.nodes.edit

  return { nodes, node, field, types, propertyFields, collectionFields, activeEdit }
}

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(remove(id)),
  toggleEdit: id => dispatch(toggleEdit(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nodes)
