import React from 'react'
import Box from '../components/Box'

import SubHeading from './SubHeading'
import Description from './Description'

const Info = Box.extend`
  width: ${ props => props.theme.info.width * 100 }%;
  padding: ${ props => props.theme.info.padding };
  margin-top: ${ props => props.theme.info.margin.top }px;
  margin-bottom: ${ props => props.theme.info.margin.bottom }px;
  text-align: center;
  vertical-align: top;
`

const Circle = Box.extend`
  font-size: 30px;
  background: ${ props => props.theme.color[props.color] || "#222" };
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 60px;
  vertical-align: middle;
`

export default ({ icon = null, iconColor, heading, color, description, alpha = 0.5 }) => {

  return (
  <Info>
    <Circle color={ iconColor }>{ icon }</Circle>
    <SubHeading color={ color }>{ heading }</SubHeading>
    <Description alpha={ alpha }>{ description }</Description>
  </Info>
)}
