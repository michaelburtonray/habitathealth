'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"

import IconClose from "./IconClose";
import IconHamburger from "./IconHamburger";
import Logo from "./Logo";
import IconArrow from "./IconArrow";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className="bg-fern-green sticky top-0 z-30">
      {isMenuOpen && <div className="bg-black/20 fixed inset-0" />}
      <div className="promo-bar body--small flex gap-4 items-center justify-center h-8">
        <span>Now operating in Sacremento</span>
        <span className="inline-flex items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="#F5F2EF"/>
          </svg>

         1-844-664-2248, TTY: 711</span>
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

          <Link href="/" className="button button--green !h-10 !px-5">Check Eligibility</Link>
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

                <Link href="/" className="button button--arrow button--green">
                  <span>Check Eligibility</span>
                  <IconArrow />
                </Link>

                <figure className="aspect-square bg-green rounded-[--radius] my-6">
                  {/* Image asset goes here */}
                </figure>

                <div className="flex flex-col gap-3">
                  <Link href="/" className="button">Sign In</Link>
                  <Link href="/" className="button">Sign Up</Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
