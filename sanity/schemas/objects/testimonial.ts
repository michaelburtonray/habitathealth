import { defineField, defineType } from "sanity";

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
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
      ],
    }),
  ],
  initialValue: {
    title: [
      {
        '_key': 'en',
        '_type': 'internationalizedArrayStringValue',
        'value': 'Habitat Health Provider',
      },
  ],
  },
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare({ media, title }) {
      return {
        media,
        title: title,
      }
    },
  },
});
