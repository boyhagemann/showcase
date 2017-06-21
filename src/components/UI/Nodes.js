import React from 'react'
import Node from './Node'
import styled from 'styled-components'
import Button from './Button'
import DropZone from './DropZone'
import MaxWidth from './MaxWidth'
import BreadcrumbContainer from './BreadcrumbContainer'
import RedirectWithMessage from './RedirectWithMessage'

const Nodes = styled.div`
`

const List = styled.div`
  margin-top: 20px;
  background: ${ props => props.theme.ui.nodes.background };
`

const Actions = styled.div`
  margin-top: 20px;
  text-align: center;
  > ${Button} {
    margin-right: 3px;
  }
`

const renderNode = (node, types, fields, remove) => node ? (
    <Node
      {...node}
      key={node.id}
      type={types[node.type]}
      fields={fields.filter(field => field.belongsTo === node.type )}
      remove={ () => remove(node.id) }
    />
) : (
  <RedirectWithMessage
    to={`/projects/${node.project}/nodes`}
    message={`The item does not exist`}
    status="negative"
  />
)

const renderEmpty = () => (
  <MaxWidth>
    <h1>Hey, starting a new project huh?</h1>
    <h2>Ok great! Let's get started with some content...</h2>
  </MaxWidth>
)

export default ({ project, node, field, nodes, path = [], types, fields, add, remove }) => node ? (
  <Nodes>
      <BreadcrumbContainer node={node} />
      { nodes.length
          ? (
            <div>
              <List>
                { nodes.map(node => renderNode(node, types, fields, remove)) }
              </List>
            </div>
          )
          : project.rootNode === node.id && renderEmpty()
      }
    <DropZone
      title="Upload your pictures..."
      description="...Or drag your images here on the drop zone."
    />
    <Actions>
      <Button onClick={add(project.id, field.id, node.id, 'grid-1x1x1')}>Add a Grid</Button>
      <Button onClick={add(project.id, field.id, node.id, 'info') }>Add an Info block</Button>
    </Actions>
  </Nodes>
) : (
  <RedirectWithMessage
    to={`/projects/${project.id}/nodes`}
    message="The node is not found"
    status="negative"
  />
)
