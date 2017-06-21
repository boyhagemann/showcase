export default [
  {
    id: 'node.0',
    project: 'project.1',
    label: 'Project',
    type: 'project',
    properties: {
      // content: ['node.1', 'node.2', 'node.3'],
    },
    parent: null,
    field: null,
    order: 0,
  },
  {
    id: 'node.1',
    project: 'project.1',
    label: 'Header',
    type: 'visual',
    properties: {
      image: '/images/plank.jpg',
      heading: 'Some title',
      subheading: 'Some subtitle',
    },
    parent: 'node.0',
    field: 'project.content',
    order: 0,
  },
  {
    id: 'node.2',
    project: 'project.1',
    label: 'Grid',
    type: 'grid-1x1x1',
    properties: {
      // column1: ['node.2.1'],
      // column2: ['node.2.2'],
      // column3: ['node.2.3'],
    },
    parent: 'node.0',
    field: 'project.content',
    order: 1,
  },
  {
    id: 'node.2.1',
    project: 'project.1',
    label: 'First column',
    type: 'info',
    properties: {
      heading: 'What about this?',
      description: `
        This is some text displayed in the first column.
        It can be very large, but will be kept in a column nicely.
        `
    },
    parent: 'node.2',
    field: 'grid-1x1x1.column1',
    order: 0,
  },
  {
    id: 'node.2.2',
    project: 'project.1',
    label: 'Second column',
    type: 'info',
    properties: {
      heading: 'The text in the second column'
    },
    parent: 'node.2',
    field: 'grid-1x1x1.column2',
    order: 1,
  },
  {
    id: 'node.2.3',
    project: 'project.1',
    label: 'Third column',
    type: 'info',
    properties: {
      heading: 'The text in the Third column'
    },
    parent: 'node.2',
    field: 'grid-1x1x1.column3',
    order: 2,
  },
  {
    id: 'node.3',
    project: 'project.1',
    label: 'Some other image',
    type: 'visual',
    properties: {
      image: '/images/IMG_3079.jpeg',
      heading: 'Some other title',
    },
    parent: 'node.0',
    field: 'project.content',
    order: 2,
  },
]
