export default [
  {
    id: 'project.content',
    belongsTo: 'project',
    name: 'content',
    label: 'Content',
    accepts: 'html',
    collection: true,
    required: false
  },
  {
    id: 'grid-1x1x1.column1',
    belongsTo: 'grid-1x1x1',
    name: 'column1',
    label: 'Column 1',
    accepts: 'html',
    collection: true,
    required: false
  },
  {
    id: 'grid-1x1x1.column2',
    belongsTo: 'grid-1x1x1',
    name: 'column2',
    label: 'Column 2',
    accepts: 'html',
    collection: true,
    required: false
  },
  {
    id: 'grid-1x1x1.column3',
    belongsTo: 'grid-1x1x1',
    name: 'column3',
    label: 'Column 3',
    accepts: 'html',
    collection: true,
    required: false
  }
]
