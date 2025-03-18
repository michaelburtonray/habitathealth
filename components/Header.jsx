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
      <div className="promo-bar rte body--small flex max-lg:flex-col lg:gap-2 items-center justify-end lg:justify-center h-20 lg:h-10 max-lg:pb-5 relative text-white">
        {promoBar && <PortableText value={promoBar} components={components} />}
        {/* <span>Now operating in Sacremento</span>
        <span className="inline-flex items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="#F5F2EF"/>
          </svg>

         1-844-664-2248, TTY: 711</span> */}
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
          <select name="language-picker" id="languages" className="select">
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
                      <h5><LinkObject {...link} /></h5>
                     </li>
                  ))}
                </ul>

                <select name="language-picker" id="languages" className="select mt-6 mb-3">
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
