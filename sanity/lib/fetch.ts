import { client } from "@/sanity/lib/client";
import * as queries from "@/sanity/lib/queries";

export const getEnrollmentData = ({ slug, lang }: { slug: string, lang: string }) => {
  const res = client.fetch(queries.enrollmentQuery, { slug, lang });
  return res;
};

export const getPageData = ({ slug, lang }: { slug: string, lang: string }) => {
  const res = client.fetch(queries.pageQuery, { slug, lang });
  return res;
}

export const getSettingsData = () => {
  const res = client.fetch(queries.settingsQuery);
  return res;
}

export const getSiteUrls = async () => {
  const res = await client.fetch(queries.siteUrlsQuery, {
    baseUrl: 'https://www.habitathealth.com/',
  })

  return res
}
