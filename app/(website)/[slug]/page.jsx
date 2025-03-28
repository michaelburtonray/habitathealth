import Content from "@/components/Content";

import { getPageData, getPageSlugs } from "@/sanity/lib/fetch";

export async function generateMetadata(
  props,
  parent
) {
  const params = await props.params;
  const { slug } = await params;
  const page = await getPageData({ slug, lang: 'en'});

  const metadata = page?.metadata || {}

  return metadata
}

export async function generateStaticParams() {
  return await getPageSlugs();
}


export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getPageData({ slug, lang: 'en'});

  return (
    <main className={`${slug}`}>
      {pageData && pageData.content && <Content content={pageData.content} title={pageData?.title || ''} />}
    </main>
  );
}
