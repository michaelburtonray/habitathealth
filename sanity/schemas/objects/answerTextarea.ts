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
