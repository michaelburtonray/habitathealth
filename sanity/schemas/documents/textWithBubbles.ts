import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'textWithBubbles',
  title: 'Text With Bubbles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'bubbles',
      title: 'Bubbles',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
          ],
          lists: [],
        })
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text With Bubbles',
      }
    },
  },
});
