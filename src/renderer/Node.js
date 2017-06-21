import Project from './Project'
import Visual from './Visual'
import Grid1x1x1 from './Grid1x1x1'
import Info from './Info'
import { normalizeProperties } from '../utils/nodes'

import { connect } from 'react-redux'

const Node = ({ type, properties }) => {

  switch(type) {

    case 'project':
      return Project(properties)

    case 'visual':
      return Visual(properties)

    case 'info':
      return Info(properties)

    case 'grid-1x1x1':
      return Grid1x1x1(properties)

    default:
      console.error(`Type ${type} is not implemented in the Node renderer`)
  }
}

const mapStateToProps = (state, { id }) => {

  const node = state.nodes.byId[id] || console.error(`Node ${id} does not exist`)
  const properties = normalizeProperties(node, state.nodes.list, state.fields.byId)

  return {
    type: node.type,
    properties: { ...node.properties, ...properties, key: node.id }
  }
}

export default connect(mapStateToProps)(Node)
