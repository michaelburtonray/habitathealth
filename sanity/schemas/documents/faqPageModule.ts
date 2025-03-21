import { defineField, defineType } from "sanity";

export default defineType({
  name: 'faqPageModule',
  title: 'FAQ Page Module',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'FAQ Page',
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'reference',
          to: [
            { type: 'faq' },
          ],
        },
      ],
    }),
  ],
});
