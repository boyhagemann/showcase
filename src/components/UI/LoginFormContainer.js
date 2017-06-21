import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm'
import { login } from '../../redux/auth'

export default reduxForm({
  form: 'login',
  onSubmit: (values, dispatch) => dispatch(login(values.email, values.password))
})(LoginForm)
