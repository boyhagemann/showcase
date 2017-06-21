import FlashMessages from './FlashMessages'
import { connect } from 'react-redux'
import { remove } from '../../redux/notifications'

const mapStateToProps = state => ({
  messages: state.notifications,
})

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(remove(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages)
