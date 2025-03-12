import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'imageWithTextGroup',
  title: 'Image With Text Group',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
    }),

    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Cream', value: 'cream' },
          { title: 'Sky Blue', value: 'sky-blue' },
        ],
      },
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [
            { type: 'imageWithText' },
          ]
        })
      ],
    }),
  ],

  initialValue: {
    bgColor: 'cream',
  },

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title[0]?.value,
        subtitle: 'Image With Text Group',
      }
    },
  },
});
