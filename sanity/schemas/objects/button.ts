import { defineField, defineType } from "sanity";

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        allowRelative: true,
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    },
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          { title: 'Orange', value: 'orange' },
          { title: 'Green', value: 'green' },
        ],
      },
      initialValue: 'orange',
    }),

    defineField({
      name: 'hasArrow',
      title: 'Has Arrow?',
      type: 'boolean',
    })
  ],
  preview: {
    select: {
      title: 'title',
      colorScheme: 'colorScheme',
    },
    prepare({ title, colorScheme }) {
      return {
        title: title[0]?.value,
        subtitle: `${colorScheme} Button`,
      }
    }
  }
});
