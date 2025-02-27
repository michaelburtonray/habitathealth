import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import settings from './schemas/singletons/settings'

import hero from './schemas/documents/hero'
import imageWithText from './schemas/documents/imageWithText'
import page from './schemas/documents/page'
import textWithIcons from './schemas/documents/textWithIcons'


import header from './schemas/objects/header'
import button from './schemas/objects/button'

const singletons = [
  settings,
]

const documents = [
  ...singletons,
  hero,
  imageWithText,
  page,
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
