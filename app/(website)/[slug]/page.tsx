import Content from "@/components/Content";

import { getPageData } from "@/sanity/lib/fetch";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getPageData({ slug, lang: 'en'});

  console.log(pageData);
  return (
    <div>
      {pageData && pageData.content && <Content content={pageData.content} />}
    </div>
  );
}