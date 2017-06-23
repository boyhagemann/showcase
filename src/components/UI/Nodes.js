import React from 'react'
import Node from './Node'
import styled from 'styled-components'
import DropZoneContainer from './DropZoneContainer'
import MaxWidth from './MaxWidth'
import BreadcrumbContainer from './BreadcrumbContainer'
import RedirectWithMessage from './RedirectWithMessage'
import NodeActionsContainer from './NodeActionsContainer'

const Nodes = styled.div`
`

const List = styled.div`
  margin-top: 20px;
  background: ${ props => props.theme.ui.nodes.background };
`


const renderNode = (node, types, propertyFields, collectionFields, remove, toggleEdit, isEdit) => node ? (
    <Node
      {...node}
      key={node.id}
      type={types[node.type]}
      propertyFields={propertyFields}
      collectionFields={collectionFields.filter(field => field.belongsTo === node.type )}
      remove={ () => remove(node.id) }
      isEdit={isEdit}
      toggleEdit={ () => toggleEdit(node.id) }
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

export default ({ project, node, field, nodes, path = [], types, propertyFields, collectionFields, add, remove, toggleEdit, activeEdit }) => node ? (
  <Nodes>
      <BreadcrumbContainer node={node} />
      { nodes.length
          ? (
            <div>
              <List>
                { nodes.map(node => renderNode(node, types, propertyFields, collectionFields, remove, toggleEdit, activeEdit === node.id )) }
              </List>
            </div>
          )
          : project.rootNode === node.id && renderEmpty()
      }
    <DropZoneContainer
      node={node}
      field={field}
      title="Upload your pictures..."
      description="...Or drag your images here on the drop zone."
    />
    <NodeActionsContainer
      project={project}
      node={node}
      field={field}
     />
  </Nodes>
) : (
  <RedirectWithMessage
    to={`/projects/${project.id}`}
    message="The node is not found"
    status="negative"
  />
)
