import Content from "@/components/Content";
import Faqs from "@/components/Faqs";
import ImageWithTextGroup from "@/components/ImageWithTextGroup";
import ListOfIcons from "@/components/ListOfIcons";
import Testimonials from "@/components/Testimonials";

import { getPageData } from "@/sanity/lib/fetch";

export default async function Home() {
  const pageData = await getPageData({slug: 'homepage', lang: 'en'});

  return (
    <main>
      {pageData && pageData.content && <Content content={pageData.content} />}
      <ImageWithTextGroup />
      <Testimonials />
      <ListOfIcons />
      <Faqs />

      {/* <div className="styleguide p-[--padding]">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-6 py-[--padding]">
          <div className="bg-green flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-cream">green</span>
          </div>

          <div className="bg-fern-green flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-cream">fern-green</span>
          </div>

          <div className="bg-cream flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-green">cream</span>
          </div>

          <div className="bg-sky-blue flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-green">sky-blue</span>
          </div>

          <div className="bg-charcoal flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-cream">charcoal</span>
          </div>

          <div className="bg-orange flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-green">orange</span>
          </div>

          <div className="bg-white flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-green">white</span>
          </div>

          <div className="bg-grey flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-green">grey</span>
          </div>

          <div className="bg-dark-grey flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-cream">dark-grey</span>
          </div>

          <div className="bg-light-grey flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2">
            <span className="body--small text-green">light-grey</span>
          </div>

          <div className="bg-green-tint flex items-end justify-center rounded-[0.25rem] w-full aspect-square p-2 border-black">
            <span className="body--small text-cream">green-tint</span>
          </div>
        </div>

        <div className="type">
          <h1>H1: The quick brown fox</h1>
          <h2>H2: The quick brown fox</h2>
          <h3>H3: The quick brown fox</h3>
          <h4>H4: The quick brown fox jumps over the lazy dog</h4>
          <h5>H5: The quick brown fox jumps over the lazy dog</h5>
          <h6>H6: The quick brown fox jumps over the lazy dog</h6>

          <p className="eyebrow">.eyebrow: The quick brown fox jumps over the lazy dog</p>
          <p className="body--large-semibold">.body--large-semibold: The quick brown fox jumps over the lazy dog</p>
          <p className="body--large">.body--large: The quick brown fox jumps over the lazy dog</p>
          <p className="body--semibold">.body--semibold: The quick brown fox jumps over the lazy dog</p>
          <p>.body: The quick brown fox jumps over the lazy dog</p>
          <p className="body--small">.body--small: The quick brown fox jumps over the lazy dog</p>
          </div>
      </div> */}
    </main>
  );
}
