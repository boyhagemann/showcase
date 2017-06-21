import React from 'react'
import FlashMessage from './FlashMessage'
import MaxWidth from './MaxWidth'

export default ({ messages, remove }) => (
  <MaxWidth>
  { messages.map(message => FlashMessage({ ...message, remove: () => remove(message.id) }))}
  </MaxWidth>
)
