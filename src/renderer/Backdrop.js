import React from 'react'
import { number } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  ${ props => props.height ? 'height: ' + props.height + 'px;' : null }
  position: relative;
`

const mask = props => props.mask
  ? 'mask-image: radial-gradient(rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);'
  : null

const blur = props => props.blur
  ? '-webkit-filter: blur(5px);'
  : null

const Image = styled.div`
  background-image: url(${ props => props.image });
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  ${ props => props.height ? 'min-height: ' + props.height + 'px;' : null }
  position: ${ props => props.fixed ? 'fixed' : 'relative' };
  ${ props => blur }
  ${ props => mask }
  mask-repeat: space;
`


const Backdrop = ({image, width, height, fixed = false, children = null}, {clientWidth, clientHeight}) => (
  <Container width={width} height={height || clientHeight}>
      <Image height={height || clientHeight} image={image} fixed={fixed} mask />
    { children }
  </Container>
)

Backdrop.contextTypes = {
  clientWidth: number.isRequired,
  clientHeight: number.isRequired,
};

export default Backdrop
