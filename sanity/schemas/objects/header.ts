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
          },
        }),
      ],
    }),

    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        defineArrayMember({ type: 'linkObject' }),
      ],
      validation: (Rule) => Rule.max(3).required(),
    }),

    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'linkObject',
      description: 'The call to action button in the header.',
    }),

    defineField({
      name: 'image',
      title: 'Mobile Menu Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'contactList',
      title: 'Contact List',
      type: 'array',
      of: [
        defineArrayMember({ type: 'linkObject' }),
      ],
      validation: (Rule) => Rule.max(2),
    }),
  ],
});
