import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'textWithChart',
  title: 'Text With Chart',
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
      name: 'chart',
      title: 'Chart',
      type: 'object',
      fields: [
        defineField({
          name: 'labels',
          title: 'Labels',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'label',
              title: 'Label',
              type: 'string',
            })
          ],
          validation: (Rule) => Rule.required().length(2),
        }),

        defineField({
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'row',
              title: 'Row',
              type: 'object',
              fields: [
                defineField({
                  name: 'col1',
                  title: 'Col 1',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'col2',
                  title: 'Col 2',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  col1: 'col1',
                  col2: 'col2',
                },
                prepare({ col1, col2 }) {
                  return {
                    title: `${col1}—${col2}`,
                  }
                },
              },
            }),
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text With Chart',
      }
    },
  },
});
