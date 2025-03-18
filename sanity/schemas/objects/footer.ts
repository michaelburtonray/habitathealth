import { defineArrayMember, defineField, defineType, } from "sanity";

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'linkLists',
      title: 'Link Lists',
      type: 'array',
      of: [{ type: 'linkList' }],
      validation: (Rule) => Rule.max(2),
    }),

    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
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

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineArrayMember({ type: 'linkObject' }),
      ],
    }),

    defineField({
      name: "regulatoryLinks",
      title: "Regulatory Links",
      type: "array",
      of: [
        defineArrayMember({ type: 'linkObject' }),
      ],
    }),

    defineField({
      name: 'copy',
      title: 'Copy',
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
        })
      ]
    })
  ],
});
