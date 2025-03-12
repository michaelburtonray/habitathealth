import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'textWithPercentages',
  title: 'Text With Percentages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'button',
      title: 'button',
      type: 'button',
    }),

    defineField({
      name: 'percentages',
      title: 'Percentages (or less/greater than)',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'percentage',
          title: 'Percentage (or less/greater than)',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),

            defineField({
              name: 'annotation',
              title: 'Annotation',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              annotation: 'annotation',
              text: 'text',
              value: 'value',
            },
            prepare({ annotation, text, value }) {
              return {
                title: `${value} ${text}`,
                subtitle: annotation,
              }
            },
          },
        }),
      ],
    })
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text With Percentages',
      }
    },
  },
});
