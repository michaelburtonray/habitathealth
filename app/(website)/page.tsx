import Content from "@/components/Content";

import { getPageData } from "@/sanity/lib/fetch";

export default async function Home() {
  const pageData = await getPageData({slug: 'homepage', lang: 'en'});

  return (
    <main>
      {pageData && pageData.content && <Content content={pageData.content} title={''} />}
    </main>
  );
}
