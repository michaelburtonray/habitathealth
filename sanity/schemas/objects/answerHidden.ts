import { defineField, defineType } from "sanity";

export default defineType({
  name: 'answerHidden',
  title: 'Answer Hidden Input',
  type: 'object',
  fields: [
    defineField({
      name: 'schemaName',
      title: 'Schema Name',
      type: 'string',
      description: 'Please use camelCase and no spaces',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The value that will be submitted with the form.',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'schemaName',
      value: 'value',
    },
    prepare({ title, value }) {
      return {
        title: `Hidden Input: ${title || 'No schema name set'}`,
        subtitle: `Value: ${value || 'No value set'}`,
      };
    },
  }
});
