import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import page from './schemas/documents/page'
import header from './schemas/objects/header'
import settings from './schemas/singletons/settings'
import button from './schemas/objects/button'
import hero from './schemas/documents/hero'

const documents = [
  hero,
  page,
  settings,
];

const objects = [
  button,
  header,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...documents,
    ...objects,
    post,
    author,
    category,
    blockContent
  ],
}
