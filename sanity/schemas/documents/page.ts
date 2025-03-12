import { defineField, defineType } from "sanity";

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'internationalizedArraySlug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'reference',
          to: [
            { type: 'hero' },
            { type: 'heroSlider' },
            { type: 'imageWithText' },
            { type: 'imageWithTextGroup' },
            { type: 'leadership' },
            { type: 'testimonials' },
            { type: 'textWithBubbles' },
            { type: 'textWithChart' },
            { type: 'textWithIcons' },
            { type: 'textWithList' },
            { type: 'textWithPercentages' },
          ],
        },
      ],
    })
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title: title[0]?.value,
        subtitle: `/${slug[0]?.value?.current}`,
      }
    }
  }
})