import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import page from './schemas/documents/page'

const documents = [
  page,
];

/* const objects = [

] */

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...documents,
    // ...objects,
    post,
    author,
    category,
    blockContent
  ],
}
