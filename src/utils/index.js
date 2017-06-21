
export const fromArray = (data, id = 'id') => data
  .reduce( (current, next) => ({ ...current, [next[id]]: next }), {})

export const toArray = (object, id = 'id') => Object.keys(object)
  .map(key => ({ ...object[key], [id]: key }))
