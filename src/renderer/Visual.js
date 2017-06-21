import React from 'react'
import styled from 'styled-components'

import Backdrop from './Backdrop'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Text from './Text'
import Box from './Box'

// import FlurishIcon from './FlurishIcon'

const Content = styled.div`
  position: absolute;
  bottom: ${ props => props.theme.visual.content.bottom }px;
  width: 100%;
`

// const Icon = styled.div`
//   position: absolute;
//   bottom: -240px;
//   width: 100%;
// `

export default ({ image, heading, subheading, children }) => (
  <Backdrop image={image}>
    <Content>
      <Box align="center">
        <Heading>{ heading }</Heading>
        <SubHeading color="olive">{ subheading }</SubHeading>
        { children ? <Text padding={30}>{ children }</Text> : null }
      </Box>
    </Content>
  </Backdrop>
)
