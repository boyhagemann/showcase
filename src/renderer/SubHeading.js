import styled from 'styled-components'

const fontSize = (props) => {
  return props.theme.subheading.size
}

const SubHeading = styled.h2`
  color: ${ props => props.theme.color[props.color] || props.theme.color.default };
  font-size: ${ fontSize }px;
  line-height: ${ fontSize }px;
  font-weight: normal;
  margin: 0 0 16px;
  opacity: ${ props => props.alpha || 1 };
  background: ${ props => props.background };
  padding: ${ props => props.padding || 0 }px;
  vertical-align: baseline;
  text-shadow: 0 0 20px rgba(0,0,0,.8);
`

export default SubHeading
