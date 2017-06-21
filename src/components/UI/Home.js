import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { FormattedMessage } from 'react-intl'

const Visual = styled.div`
    position: relative;
    height: 400px;
    background: ${ props => props.theme.ui.home.visual.background };
    box-sizing: border-box;
`

const Container = styled.div`
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 40px;
`

const Heading = styled.h1`
    margin: 0;
    padding-top: 200px;
    color: ${ props => props.theme.ui.home.visual.color };
`
const SubHeading = styled.h2`
    margin: 0 0 70px;
    color: ${ props => props.theme.ui.home.visual.color };
`

const renderCreateButton = (create) => {

  // const id = uuidv4()

  return (
    <Button
      primary
      large
      onClick={create}
    >
      <FormattedMessage id="home.visual.actions.create-project" />
    </Button>
  )
}

export default ({ create }) => (
  <div>
    <Visual>
        <Container>
            <Heading><FormattedMessage id="home.visual.heading" /></Heading>
            <SubHeading><FormattedMessage id="home.visual.subheading" /></SubHeading>
            { renderCreateButton(create) }
        </Container>
    </Visual>
  </div>
)
