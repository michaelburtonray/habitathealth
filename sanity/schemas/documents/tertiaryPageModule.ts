import { defineField, defineType } from "sanity";

export default defineType({
  name: 'tertiaryPageModule',
  title: 'Tertiary Page Module',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    })
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      return {
        title: `${content[0].children[0].text.slice(0, 67)}…`,
        subtitle: 'Tertiary Page Module',
      };
    },
  },
});
