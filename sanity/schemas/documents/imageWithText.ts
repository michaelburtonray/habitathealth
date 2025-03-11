import { defineField, defineType } from "sanity";

export default defineType({
  name: 'imageWithText',
  title: 'Image With Text',
  type: 'document',
  fields:[
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
      name: 'isImageOnleft',
      title: 'Is Image On Left?',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'internationalizedArrayString',
        }),

        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
          }),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      text: 'text',
      media: 'image',
    },
    prepare({ media, text, title }) {
      const  t = title[0]?.value ? title[0].value : text[0]?.value;

      return {
        media,
        title: t,
        subtitle: 'Image With Text',
      };
    },
  },
});
