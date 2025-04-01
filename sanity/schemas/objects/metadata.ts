import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    /* Meta */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'openGraph',
      title: 'OpenGraph',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
        }),
        defineField({
          name: 'siteName',
          title: 'Site Name',
          type: 'string',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
          description: 'Recommended size is 1200x630. No larger than 1mb.',
        }),
      ],
    }),
    /* Open graph */

    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'card',
          title: 'Card',
          type: 'string',
          initialValue: 'summary',
          readOnly: false,
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'siteId',
          title: 'Site ID',
          type: 'string',
        }),
        defineField({
          name: 'creator',
          title: 'Creator',
          type: 'string',
          description: 'Twitter handle goes here',
        }),
        defineField({
          name: 'creatorId',
          title: 'Creator ID',
          type: 'string',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
          description: 'Recommended size is 1600x900. No larger than 1mb.',
        }),
      ],
    }),

    /* Search */
    defineField({
      name: 'allowRobots',
      type: 'boolean',
      title: 'Allow page to be crawled by search engines',
      initialValue: true,
    }),

    defineField({
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      openGraphTitle: 'openGraph.title',
      twitterTitle: 'twitter.title',
    },
    prepare({ title, description, openGraphTitle, twitterTitle }) {
      return {
        title: title || openGraphTitle || twitterTitle || 'No title',
        subtitle: description || 'No description',
      }
    },
  }
})
