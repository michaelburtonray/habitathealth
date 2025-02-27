import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'promoBar',
      title: 'Promo/Announcment Bar',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles:[{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],

            /* annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'link',
              },
            ], */
          },
        }),
      ],
    }),

    /* defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [{ type: 'link' }],
      validation: (Rule) => Rule.max(3).required(),
    }), */
  ]
})