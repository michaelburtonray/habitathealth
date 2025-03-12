import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'textWithList',
  title: 'Text With List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),

    defineField({
      name: 'button',
      title: 'button',
      type: 'button',
    }),

    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text With List',
      }
    },
  },
});
