import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'answerSelectDropdown',
  title: 'Answer Select Dropdown',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'schemaName',
      title: 'Schema Name',
      type: 'string',
      description: 'Please use camelCase and no spaces',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    }),

    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'placeholder',
      heading: 'heading',
    },
    prepare({ title, heading }) {
      const titleArr = [heading, title];

      return {
        title: titleArr.filter(Boolean).join('—'),
        subtitle: 'Select dropdown input',
      };
    },
  },
});
