import { MetadataRoute } from 'next'
import { getSiteUrls } from '@/sanity/lib/fetch'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSiteUrls()
  const { enrollment, pages } = data

  return [enrollment, ...pages]
}