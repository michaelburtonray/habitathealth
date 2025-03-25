import { getSiteUrls } from '@/sanity/lib/fetch'

export default async function sitemap() {
  const data = await getSiteUrls()
  const { enrollment, pages } = data

  return [enrollment, ...pages]
}