import { connect } from 'react-redux'
import { add } from '../../redux/nodes'
import DropZone from './DropZone'

const mapDispatchToProps = (dispatch, { node, field }) => ({
    add: file => dispatch(add({
      project: node.project,
      field: field.id,
      label: file.name,
      parent: node.id,
      typeId: 'visual',
      properties: {
        image: file.preview,
        heading: file.name,
      }
    }))
})

export default connect(null, mapDispatchToProps)(DropZone)
