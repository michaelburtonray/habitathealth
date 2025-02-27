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
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
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
          ],
          preview: {
            select: {
              title: 'alt',
            },
            prepare({ title }) {
              return {
                title: title[0]?.value,
              }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.max(8),
    })
  ],
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