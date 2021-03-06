export default [
  {
    id: 'project',
    label: 'Project',
    description: 'Your brand new project',
    extends: null,
    component: 'Project',
    defaultField: 'project.content',
  },
  {
    id: 'visual',
    label: 'Visual',
    description: 'Show an image on your page',
    extends: 'Html',
    component: 'Visual',
    defaultField: null,
  },
  {
    id: 'info',
    label: 'Info',
    description: 'Show an info block on your page',
    extends: 'Html',
    component: 'Info',
    defaultField: null,
  },
  {
    id: 'grid-1x1x1',
    label: 'Grid 1x1x1',
    description: 'Have 3 containers to put stuff in',
    extends: 'Html',
    component: 'Grid1x1x1',
    defaultField: null,
  },
  {
    id: 'html',
    label: 'Html',
    description: 'An abstract html component',
    extends: null,
    component: null,
    defaultField: null,
  },
]
