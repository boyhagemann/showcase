import { number } from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${ props => props.width ? props.width * 100 : 100 }%;
  padding: 0 32px;
  text-align: ${ props => props.align || 'left'};
  margin: ${ props => props.margin || 0 }
`

Box.contextTypes = {
  clientWidth: number.isRequired,
  clientHeight: number.isRequired,
};

export default Box
