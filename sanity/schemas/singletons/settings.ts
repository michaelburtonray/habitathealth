import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'metadata', title: 'Metadata'},
    { name: 'header', title: 'Header'},
    { name: 'footer', title: 'Footer'},
  ],
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      type: 'metadata',
      name: 'metadata',
      group: 'metadata',
      description: 'The metadata of the site used for SEO.',
      preview: {
        select: {
          title: 'metadata.title',
          description: 'metadata.description',
        },
        prepare({ title, description }) {
          return {
            title: title || 'No Title',
            subtitle: description || 'No Description',
          };
        }
      },
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
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Site settings, Metadata, Header and Footer',
      };
    },
  }
});
