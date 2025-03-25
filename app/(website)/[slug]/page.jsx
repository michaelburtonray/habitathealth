import Content from "@/components/Content";

import { getPageData } from "@/sanity/lib/fetch";

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getPageData({ slug, lang: 'en'});

  return (
    <main className={`${slug}`}>
      {pageData && pageData.content && <Content content={pageData.content} title={pageData?.title || ''} />}
    </main>
  );
}