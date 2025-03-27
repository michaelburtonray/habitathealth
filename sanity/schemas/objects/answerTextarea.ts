import { defineField, defineType } from "sanity";

export default defineType({
  name: 'answerTextarea',
  title: 'Answer Textarea',
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
        subtitle: 'Textarea input',
      };
    },
  },
});
