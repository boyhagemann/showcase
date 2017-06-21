import styled from 'styled-components'

const fontSize = (props) => {
  return props.theme.heading.size
}

const Heading = styled.h1`
  color: ${ props => props.color || 'white' };
  font-size: ${ fontSize }px;
  line-height: ${ fontSize }px;
  font-weight: normal;
  font-family: Anton;
  margin: 0;
  opacity: ${ props => props.alpha || 1 };
  background: ${ props => props.background };
  padding: ${ props => props.padding || 0 }px;
  text-shadow: 0 0 20px rgba(0,0,0,.8)
`

export default Heading
