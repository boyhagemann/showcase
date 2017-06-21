import styled from 'styled-components'

const Text = styled.p`
  color: ${ props => props.color || 'white' };
  font-family: ${ props => props.theme.text.font };
  font-size: ${ props => props.theme.text.size }px;
  line-height: ${ props => props.theme.text.lineHeight }px;
  margin: 0;
  opacity: ${ props => props.alpha || 1 };
  background: ${ props => props.background };
  padding-top: ${ props => props.padding || 0 }px;
`

export default Text
