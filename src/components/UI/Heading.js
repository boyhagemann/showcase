import styled from 'styled-components'

export default styled.h1`
  margin: 0;
  color: ${ props => props.theme.ui.heading.color };
  font-family: ${ props => props.theme.ui.fonts.default };
  font-size: ${ props => props.theme.ui.fontSizes.heading };
  font-weight: normal;
`
