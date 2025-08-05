/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
// import { linkField } from "sanity-plugin-link-field";
import { structureTool } from 'sanity/structure'
import { pageStructure, singletonPlugin } from './sanity/plugins/settings'
import enrollment from './sanity/schemas/singletons/enrollment'
import settings from './sanity/schemas/singletons/settings'
import enrollmentFlow from './sanity/schemas/singletons/enrollmentFlow'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: pageStructure([
        settings,
        enrollment,
        enrollmentFlow,
      ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    ...(process.env.NODE_ENV === "development" ? [visionTool({defaultApiVersion: apiVersion})] : []),
    media(),
    vercelDeployTool(),
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'es', title: 'Español' },
      ],
      defaultLanguages: ['en'],
      fieldTypes: [
        'slug',
        'string',
        'text',
      ],
      languageDisplay: 'titleAndCode'
    }),
    /* linkField({
      linkableSchemaTypes: ['page'],
    }), */
    singletonPlugin([settings.name])
  ],
})
