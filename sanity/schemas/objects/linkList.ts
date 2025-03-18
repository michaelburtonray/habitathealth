import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'linkList',
  title: 'Link List',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({ type: 'linkObject' }),
      ],
    }),
  ],
});
