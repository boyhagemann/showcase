import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const renderButton = ({ primary, secondary, tertiary, small, large, border, ...props}) => <Link { ...props} />

// Replace the original 'button' html tag with a custom one
export default Button.withComponent(renderButton)
