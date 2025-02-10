import Link from "next/link";
import IconArrow from "./IconArrow";

export default function ImageWithText() {
  const isImageOnLeft = false;

  return (
    <div className={`image-with-text bg-sky-blue lg:flex lg:justify-between my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green ${isImageOnLeft && 'lg:flex-row-reverse'}`}>
      <div className="image-with-text__text">
        <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          <div className="eyebrow">Our Locations</div>
          <h4>Check our service availability in your area</h4>
          <p className="body--large-semibold max-w-[30rem]">Habitat Health operates in Sacremento, with additional California-based centers to follow.</p>

          <Link href="/our-locations" className="button button--arrow max-lg:hidden mt-4">
            <span>Check Eligibility</span>
            <IconArrow />
          </Link>
        </div>
      </div>

      <div className="image-with-text__image lg:max-w-[50%] max-lg:my-10">
        <figure className="aspect-square">
          <img src="/hh-map.jpg" alt="Habitat Health" className="rounded-[--radius] w-full" />
        </figure>
      </div>

      <Link href="/our-locations" className="button button--arrow lg:hidden mt-4">
        <span>Check Eligibility</span>
        <IconArrow />
      </Link>
    </div>
  )
}
