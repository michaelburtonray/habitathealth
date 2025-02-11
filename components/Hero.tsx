import Link from "next/link";

import IconArrow from "./IconArrow";

export default function Hero() {
  return (
    <div className="hero grid grid-cols-2">
      <figure className="hero__image bg-green -mr-[100%] overflow-hidden rounded-b-2xl">
        <img src="/hp_hero_mob.jpg" alt="Habitat Health" className="lg:hidden w-full" />
        <img src="/hp_hero.jpg" alt="Habitat Health" className="max-lg:hidden" />
      </figure>
      <div className="hero-text box-content flex max-w-[32.125rem] -ml-[100%] p-5 lg:p-10">
        <div className="flex flex-col gap-6 mt-auto rte sticky bottom-10">
          <h1>Empowering seniors to have more good days</h1>
          <p className="body--large">Habitat Health provides medical care and health services at our centers, extends care to the home, and offers additional services such as transportation and more.</p>
          <Link href="/" className="button button--arrow ">
            <span>Check Eligibility</span>

            <IconArrow />
          </Link>
        </div>
      </div>
    </div>
  )
}