import { connect } from 'react-redux'
import PropertyField from './PropertyField'
import { change } from '../../redux/nodes'

const getValue = event =>
  event.target.type === 'checkbox'
    ? event.target.checked
    : event.target.value

const getName = event => event.target.name

const mapDispatchToProps = (dispatch, { id }) => ({
  change: event => dispatch(change(id, getName(event), getValue(event)))
})

export default connect(null, mapDispatchToProps)(PropertyField)
