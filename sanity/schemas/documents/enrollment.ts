import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'enrollment',
  title: 'Enrollment Flow Page',
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
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
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
  ],
});
