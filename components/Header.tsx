'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PortableText } from "next-sanity";

import IconClose from "./IconClose";
import IconHamburger from "./IconHamburger";
import Logo from "./Logo";
import IconArrow from "./IconArrow";
import { type Header } from "@/sanity.types";

export default function Header(props: Header) {
  const { promoBar } = props;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-fern-green sticky top-0 z-30">
      {isMenuOpen && <div className="bg-black/20 fixed inset-0" />}
      <div className="promo-bar body--small flex gap-4 items-center justify-center h-8">
        {promoBar && <PortableText value={promoBar} />}
        {/* <span>Now operating in Sacremento</span>
        <span className="inline-flex items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="#F5F2EF"/>
          </svg>

         1-844-664-2248, TTY: 711</span> */}
      </div>
      <div className="bg-white flex lg:grid gap-8 lg:grid-cols-3 items-center justify-between h-20 px-5 lg:px-10 py-5 relative rounded-t-2xl text-green z-30">
        <Link href="/" className="h-8">
          <Logo />
        </Link>

        <nav className="nav-desktop body--large flex justify-center max-lg:hidden">
          <ul className="flex gap-8">
            <li className={`${pathname === '/how-it-works' ? 'active' : ''}`}><Link href="/how-it-works">How It Works</Link></li>
            <li className={`${pathname === '/our-locations' ? 'active' : ''}`}><Link href="/our-locations">Our Locations</Link></li>
            <li className={`${pathname === '/faq' ? 'active' : ''}`}><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>

        <div className="buttons flex gap-3 max-lg:hidden justify-end">
          <select name="language-picker" id="languages">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <Link href="/check-eligibility" className="button button--green !h-10 !px-5">Check Eligibility</Link>
        </div>

        <div className="menu flex items-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconClose /> : <IconHamburger />}
          </button>
        </div>
      </div>

      <div className="lg:hidden absolute inset-x-0 text-green">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              className="bg-cream px-[--padding] top-[6.375rem] py-10 rounded-b-[--radius] sticky bottom-10 overflow-scroll max-h-[calc(100svh-8.875rem)]"
            >
              <nav className="nav-mobile">
                <ul className="flex flex-col gap-3">
                  <li className={`${pathname === '/how-it-works' ? 'active' : ''}`}>
                    <h5><Link href="/how-it-works">How It Works</Link></h5>
                  </li>
                  <li className={`${pathname === '/our-locations' ? 'active' : ''}`}>
                    <h5><Link href="/our-locations">Our Locations</Link></h5>
                  </li>
                  <li className={`${pathname === '/faq' ? 'active' : ''}`}>
                    <h5><Link href="/faq">FAQ</Link></h5>
                  </li>
                </ul>

                <select name="language-picker" id="languages" className="mt-6 mb-3">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>

                <Link href="/check-eligibility" className="button button--arrow button--green">
                  <span>Check Eligibility</span>
                  <IconArrow />
                </Link>

                <figure className="aspect-square bg-green rounded-[--radius] my-6">
                  <img src="/hh_nav_photo.jpg" alt="Habitat Health" className="w-full" />
                </figure>

                <div className="flex flex-col gap-3">
                  <Link href="/" className="button flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="currentColor"/>
                    </svg>
                    <span className="underline">1-844-664-2248,</span> TTY: 711
                  </Link>
                  <a href="mailto:info@habitathealth.com" className="button flex items-center gap-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.87868 6.037C3 6.91568 3 8.3299 3 11.1583V13.1583C3 15.9868 3 17.401 3.87868 18.2796C4.75736 19.1583 6.17157 19.1583 9 19.1583H15C17.8284 19.1583 19.2426 19.1583 20.1213 18.2796C21 17.401 21 15.9868 21 13.1583V11.1583C21 8.3299 21 6.91568 20.1213 6.037C19.2426 5.15833 17.8284 5.15833 15 5.15833H9C6.17157 5.15833 4.75736 5.15833 3.87868 6.037ZM6.5547 8.32627C6.09517 8.01992 5.4743 8.1441 5.16795 8.60363C4.8616 9.06315 4.98577 9.68402 5.4453 9.99038L10.8906 13.6206C11.5624 14.0684 12.4376 14.0684 13.1094 13.6206L18.5547 9.99038C19.0142 9.68402 19.1384 9.06315 18.8321 8.60363C18.5257 8.1441 17.9048 8.01992 17.4453 8.32627L12 11.9565L6.5547 8.32627Z" fill="#003F3A"/>
                    </svg>
                    <span className="underline">info@habitathealth.com</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
