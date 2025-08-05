import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'enrollmentFlow',
  title: 'Enrollment Flow Page New',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'text',
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'button',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({ type: 'enrollmentSection' }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'text',
    }),

    defineField({
      name: 'zipCodes',
      title: 'Zip Codes',
      type: 'text',
      description: 'Comma separated list of zip codes',
    }),

    defineField({
      name: 'successCopy',
      title: 'Success Copy',
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
  ]
})