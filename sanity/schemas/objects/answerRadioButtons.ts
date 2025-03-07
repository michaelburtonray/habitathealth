import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'answerRadioButtons',
  title: 'Answer Radio Buttons',
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
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'answer',
          title: 'Answer',
          type: 'object',
          fields: [
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
      answers: 'answers',
    },
    prepare({ answers }) {
      const mappedAnswers = answers
        .map((answer: { value: string }) => answer.value)
        .join(', ');

      return {
        title: mappedAnswers,
        subtitle: 'Multiple choice question with radio buttons',
      };
    },
  },
});
