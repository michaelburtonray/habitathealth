import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Frequently Asked Questions',
    }),

    defineField({
      name: 'faqQAs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'faqQA',
        }),
      ],
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'FAQ Section',
      };
    },
  },
});
