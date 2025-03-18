import { defineField, defineType } from "sanity";

export default defineType({
  name: 'linkObject',
  title: 'Link Object',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        allowRelative: true,
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    }),

    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'enrollment' },
      ],
      hidden: ({ parent }) => parent?.url,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      altTitle: 'internalLink.title',
    },

    prepare({ title, altTitle }) {
      return {
        title: title || altTitle || 'No title',
        subtitle: altTitle ? 'Internal Link' : 'External Link',
      };
    },
  }
});
