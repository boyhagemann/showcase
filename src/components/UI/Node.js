import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import Button from './Button'
import ButtonLink from './ButtonLink'
import MaxWidth from './MaxWidth'
import NodePropertiesForm from './NodePropertiesForm'
import { FormattedMessage } from 'react-intl'

const Node = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  padding: ${ props => props.theme.ui.node.padding };
  font-family: ${ props => props.theme.ui.fonts.default };
`

const Heading = styled.h2`
  margin: 0;
  font-weight: normal;
  color: ${ props => props.theme.ui.node.heading.color };
`

const Fields = styled.div`
  margin-top: 20px;
`

const FieldButton = ButtonLink.extend`
  margin-right: 3px;
`

const Type = styled.span`
  background: #e1e3e5;
  padding: 2px 5px;
  font-size: 0.8em;
`

const Content = styled(Box)`
  width: ${ props => props.theme.ui.node.content.width};
  padding: ${ props => props.theme.ui.node.content.padding };
`
const Block = styled(MaxWidth)`
  background: ${ props => props.theme.ui.node.block.background };
`

const Actions = styled(Box)`
  text-align: ${ props => props.theme.ui.node.actions.textAlign};
  width: ${ props => props.theme.ui.node.actions.width};
  padding: ${ props => props.theme.ui.node.actions.padding };
`

const EditButton = styled(Button)`
  margin-right: ${ props => props.theme.ui.node.actions.spacing };
`

const Container = styled.div`
  position: relative;
`

export default ({ id, type, properties, collectionFields, propertyFields, label, project, remove, toggleEdit, isEdit }) => (
  <Container key={id}>
    <Node>
      <Block>
        <Content>
          <Heading>{ label } <Type>{ type.label }</Type></Heading>
          { collectionFields.length ? (<Fields>
            { collectionFields.map(field => (
              <FieldButton
                key={`aaaa${id}-${field.id}`}
                to={`/projects/${project}/nodes/${id}/${field.id}`}
                border
              >{ field.label }</FieldButton>
            )) }
          </Fields>
        ) : null }
        </Content>
        <Actions>
          <EditButton border onClick={toggleEdit}><FormattedMessage id="node.actions.edit" /></EditButton>
          <Button negative onClick={remove}><FormattedMessage id="node.actions.delete" /></Button>
        </Actions>
        { isEdit && (
          <NodePropertiesForm
            onSubmit={values => console.log(values)}
            id={id}
            fields={propertyFields.filter(field => field.belongsTo === type.id)}
            properties={properties}
          />
        ) }
      </Block>
    </Node>
  </Container>
)
