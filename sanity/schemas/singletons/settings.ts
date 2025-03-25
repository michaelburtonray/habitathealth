import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'header', title: 'Header'},
    { name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the site',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'defaultTitle',
      title: 'Default Title',
      type: 'string',
      description: 'The default title as seen on the homepage',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the site used for the <meta> description tag for SEO.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      group: 'header',
      description: 'The header of the site',
    }),

    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'footer',
      description: 'The footer of the site',
    }),
  ],
});
