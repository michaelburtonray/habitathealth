import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'formField',
  title: 'Form Field',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),

    defineField({
      name: 'info',
      title: 'Info',
      type: 'string',
    }),

    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        defineArrayMember({ type: 'answerRadioButtons' }),
        defineArrayMember({ type: 'answerSelectDropdown' }),
        defineArrayMember({ type: 'answerText' }),
        defineArrayMember({ type: 'answerTextarea' }),
      ]
    })
  ]
})