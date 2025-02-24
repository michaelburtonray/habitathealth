export default function ImageWithTextGroup() {
  return (
    <div className="image-with-text-group bg-cream my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green">
      <div className="eyebrow lg:text-center">What Makes Us Different</div>
      <h4 className="lg:text-center mt-6 mx-auto max-w-[46.875rem]">Unlike traditional offerings, PACE with Habitat Health prioritizes…</h4>

      <div className={`image-with-text lg:grid grid-cols-2 my-16`}>
        <div className={`image-with-text__text ${true && 'lg:order-2'}`}>
          <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
            <div className="eyebrow">Community</div>
            <h6>Habitat Health fosters community with social opportunities and active engagement, going beyond the medical and social care offered by other PACE programs.</h6>
          </div>
        </div>

        <div className="image-with-text__image lg:max-w-[50%] max-lg:my-10">
          <figure className="aspect-square bg-green lg:w-[40rem] rounded-[--radius]">
            {/* <img src="/hh-map.jpg" alt="Habitat Health" className="rounded-[--radius] w-full" /> */}
          </figure>
        </div>
      </div>

      <div className={`image-with-text lg:grid grid-cols-2 my-16}`}>
        <div className={`image-with-text__text ${false && 'lg:order-2'}`}>
          <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
            <div className="eyebrow">Whole-Person Care</div>
            <h6>Whole-person care at Habitat Health is focused on maintaining meaning in participants’ lives by preserving the aspects of life most important to them.</h6>
          </div>
        </div>

        <div className="image-with-text__image lg:max-w-[50%] max-lg:my-10">
          <figure className="aspect-square bg-green lg:w-[40rem] rounded-[--radius]">
            {/* <img src="/hh-map.jpg" alt="Habitat Health" className="rounded-[--radius] w-full" /> */}
          </figure>
        </div>
      </div>

      <div className={`image-with-text lg:grid grid-cols-2 my-16`}>
        <div className={`image-with-text__text ${true && 'lg:order-2'}`}>
          <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
            <div className="eyebrow">Cultural Competency</div>
            <h6>Habitat Health provides bespoke, local care that is tailored to each participant’s needs - social, cultural, and linguistic, in addition to medical.</h6>
          </div>
        </div>

        <div className="image-with-text__image lg:max-w-[50%] max-lg:my-10">
          <figure className="aspect-square bg-green lg:w-[40rem] rounded-[--radius]">
            {/* <img src="/hh-map.jpg" alt="Habitat Health" className="rounded-[--radius] w-full" /> */}
          </figure>
        </div>
      </div>
    </div>
  )
}