
// export const getType = (id, types) => types.find(type => type.id === id)

// export const getTypeFields = (type, fields) => fields.filter(field => field.parent === type)

// export const getField = (id, fields) => fields.find(field => field.id === id)

// export const getNode = (id, nodes) => nodes.find(node => nodes.id === id)

// export const getNodeFromEdges = (node, edges) => edges.filter(edge => edge.from === node)
// export const getNodeToEdges = (node, edges) => edges.filter(edge => edge.to === node)


export const getNextOrder = (parent, field, nodes) => nodes
  .filter(node => node.parent === parent)
  .filter(node => node.field === field)
  .length


export const normalizeProperties = (parent, nodes, fieldsById) => nodes
  .filter(node => node.parent === parent.id)
  .sort( (a, b) => a.order - b.order)
  .reduce( (props, node) => {

    const name = fieldsById[node.field].name

    const items = props[name]
      ? [ ...props[name], node.id ]
      : [ node.id ]

    return { ...props, [name]: items }
  }, {})


export const getPath = (node, nodesById, path = []) => {

  if(!node.parent) return path

  const parent = nodesById[node.parent]

  return getPath(parent, nodesById, [ node, ...path ])
}
