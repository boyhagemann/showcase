import styled from 'styled-components'

export default styled.p`
  display: inline-block;
  color: ${ props => props.color || 'white' };
  font-size: ${ props => props.theme.description.size }px;
  font-family: ${ props => props.theme.description.font };
  line-height: ${ props => props.theme.description.lineHeight }px;
  opacity: ${ props => props.alpha || 1 };
  margin: 0;
  width: ${ props => props.width ? props.width * 100 + '%' : null };
  text-shadow: 0 0 2px rgba(0,0,0,1)
`
