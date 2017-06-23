import styled from 'styled-components'

const Input = styled.input`
  padding: 10px 0;
  text-indent: 10px;
  border: none;
  font-size: 1em;
  font-family: ${ props => props.theme.ui.fonts.default };
  background: ${ props => props.theme.ui.colors.canvas };
  width: 100%;
  max-width: 400px;
`

export default Input
