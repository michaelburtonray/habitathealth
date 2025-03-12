import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'textWithIcons',
  title: 'Text With Icons',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),

    defineField({
      name: 'isStacked',
      title: 'Is Stacked?',
      description: 'If checked, text fields will be stacked above the grid of icons. If unchecked, text will be to the left of grid of icons.',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Cream', value: 'cream' },
          { title: 'Green', value: 'green' },
          { title: 'Sky Blue', value: 'sky-blue' },
        ],
      },
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
      hidden: ({ parent }) => parent?.isStacked,
    }),

    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'internationalizedArrayText',
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),

    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Icon Title and Alt text',
              type: 'internationalizedArrayString',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'text',
              title: 'Icon Text',
              type: 'text',
              rows: 2,
              hidden: ({ document }) => !document?.isStacked,
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'text',
              media: 'image',
            },
            prepare({ media, subtitle, title }) {
              return {
                media,
                subtitle,
                title: title[0]?.value,
              }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.max(8),
    })
  ],

  initialValue: {
    bgColor: 'green',
  },

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title[0]?.value,
        subtitle: 'Text With Icons',
      }
    }
  }
})