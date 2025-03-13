import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'logoWithIcons',
  title: 'Logo With Icons',
  type: 'document',
  fields: [
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
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'text',
              title: 'Icon Text',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
            prepare({ media, title }) {
              return {
                media,
                title,
              }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.required().max(4),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Logo With Icons',
      }
    }
  }
});
