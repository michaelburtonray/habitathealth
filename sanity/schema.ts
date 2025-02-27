import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import hero from './schemas/documents/hero'
import page from './schemas/documents/page'
import textWithIcons from './schemas/documents/textWithIcons'

import settings from './schemas/singletons/settings'

import header from './schemas/objects/header'
import button from './schemas/objects/button'

const documents = [
  hero,
  page,
  settings,
  textWithIcons,
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
