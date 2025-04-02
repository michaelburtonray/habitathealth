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
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      hidden: ({ parent }) => parent?.url || parent?.internalLink?._ref,
    }),

    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'enrollment' },
      ],
      hidden: ({ parent }) => parent?.url || parent?.file?._ref,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      altTitle: 'internalLink.title',
      file: 'file',
    },

    prepare({ title, altTitle, file }) {
      const name = Boolean(file) ? 'Internal Link (File)' : 'External Link';

      return {
        title: title || altTitle || 'No title',
        subtitle: altTitle ? 'Internal Link' : name,
      };
    },
  }
});
