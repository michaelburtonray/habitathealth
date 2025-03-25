'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PortableText } from "next-sanity";

import IconClose from "./IconClose";
import IconHamburger from "./IconHamburger";
import IconArrow from "./IconArrow";
import IconPhone from "./IconPhone";
import IconEmail from "./IconEmail";
import LinkObject from "./LinkObject";
import Logo from "./Logo";

export default function Header(props) {
  const { contactList, image, nav, promoBar } = props;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const components = {
    block: {
      normal: ({ children, markDefs }) => {
        const { props } = children[0];
        let icon = '';

        if (props) {
          const { markType, value } = props;

          if (markType === 'link') {
            if (value.href.includes('tel')) {
              icon = <IconPhone />
            } else if (value.href.includes('mailto')) {
              icon = <IconEmail />
            }
          }

          return <p className="flex gap-1 items-center !px-4">{icon}{children}</p>
        }

        return <p>{children}</p>
      }
    }
  }

  // Closes on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isMenuOpen]);

  return (
    <header className={`bg-fern-green sticky top-0 z-30 ${isMenuOpen ? 'menu-open' : ''}`}>
      {isMenuOpen && <div className="bg-charcoal/70 fixed inset-0" />}
      <div className="promo-bar rte body--small flex max-lg:flex-col lg:gap-2 items-center justify-end lg:justify-center h-[4.75rem] lg:h-10 max-lg:pb-4 relative text-white">
        {promoBar && <PortableText value={promoBar} components={components} />}
      </div>
      <div className="bg-white flex xl:grid gap-8 xl:grid-cols-3 items-center justify-between h-20 px-5 lg:px-10 py-5 relative rounded-t-2xl text-green z-30">
        <Link href="/" className="h-8">
          <Logo />
        </Link>

        <nav className="nav-desktop body--large flex justify-center max-xl:hidden">
          <ul className="flex gap-8">
            <li className={`${pathname === '/how-it-works' ? 'active' : ''}`}><Link href="/how-it-works">How It Works</Link></li>
            <li className={`${pathname === '/our-locations' ? 'active' : ''}`}><Link href="/our-locations">Our Locations</Link></li>
            <li className={`${pathname === '/faq' ? 'active' : ''}`}><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>

        <div className="buttons flex gap-3 max-xl:hidden justify-end">
          <select name="language-picker" id="languages" className="select select--lang">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <Link href="/check-eligibility" className="button button--green !h-10 !px-5">Check Eligibility</Link>
        </div>

        <div className="menu flex items-center xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconClose /> : <IconHamburger />}
          </button>
        </div>
      </div>

      <div className="xl:hidden absolute inset-x-0 text-green">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              className="bg-cream px-[--padding] top-[6.375rem] py-10 rounded-b-[--radius] sticky bottom-10 overflow-scroll max-h-[calc(100svh-11.875rem)]"
            >
              <nav className="nav-mobile">
                <ul className="flex flex-col gap-3">
                  {nav.map((link) => (
                     <li key={link._key} className={`${pathname === link.slug ? 'active' : ''}`}>
                      <h1><LinkObject {...link} /></h1>
                     </li>
                  ))}
                </ul>

                <select name="language-picker" id="languages" className="select select--lang mt-6 mb-3">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>

                <Link href="/check-eligibility" className="button button--arrow button--green">
                  <span>Check Eligibility</span>
                  <IconArrow />
                </Link>

                {image && <figure className="aspect-square bg-green relative rounded-2xl my-6 w-full sm:max-w-[50%]">
                  {image.assetPath && <Image
                    src={image.assetPath}
                    alt={image.alt || 'Habitat Health'}
                    fill={true}
                    className="object-cover rounded-2xl"
                  />}
                </figure>}

                <div className="flex flex-col gap-3">
                  {contactList.map((contact) => <LinkObject key={contact._key} {...contact} isButton={true} />)}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
