import React from 'react'
import styled from 'styled-components'
import Color from 'color'

const getPadding = props => {

  const button = props.theme.ui.button

  if(props.small) return button.small.padding
  if(props.large) return button.large.padding

  return button.default.padding
}

const getFontSize = props => {

  const button = props.theme.ui.button

  if(props.small) return button.small.fontSize
  if(props.large) return button.large.fontSize

  return button.default.fontSize
}

const getColor = props => {

  const button = props.theme.ui.button

  if(props.primary) return button.primary.color
  if(props.secondary) return button.secondary.color
  if(props.tertiary) return button.tertiary.color
  if(props.positive) return button.positive.color
  if(props.negative) return button.negative.color

  return button.default.color
}

const getBorder = props => {

  if(!props.border) return 'none'

  const button = props.theme.ui.button

  if(props.primary) return button.primary.border
  if(props.positive) return button.positive.border
  if(props.negative) return button.negative.border

  return button.default.border
}

const getBackgroundColor = props => {

  const button = props.theme.ui.button
  const states = ['primary', 'secondary', 'tertiary', 'positive', 'negative']

  const color = states.reduce( (selected, state) => selected || (props[state] && button[state].background), null)
    || button.default.background

  return props.active ? Color(color).lighten(0.1).string() : color
}

const renderButton = ({ primary, secondary, tertiary, positive, negative, small, large, border, active, ...props}) => <button type="button" {...props} />

const Button = styled(renderButton)`
  display: inline-block;
  box-sizing: border-box;
  background: ${getBackgroundColor};
  color: ${getColor};
  border: ${getBorder};
  padding: ${getPadding};
  font-size: ${getFontSize};
  line-height: ${getFontSize};
  cursor: pointer;
  text-decoration: none;
`

export default Button
