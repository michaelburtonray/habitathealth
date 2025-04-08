'use client'

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { PortableText } from "next-sanity";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [availableLanguages, setAvailableLanguages] = useState([]);

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
    setMenuIsOpen(false);
  }, [currentLang, pathname]);

  const initWeglot = useCallback(async () => {
    if (typeof window !== 'undefined' && window.Weglot) {
      await window.Weglot.initialize({
        api_key: process.env.NEXT_PUBLIC_WEGLOT_API_KEY,
        hide_switcher: true,
      });
    }

    const Weglot = window.Weglot;

    Weglot?.on('initialized', () => {
      const availableLangs = Weglot?.options?.languages?.map(({ language_to }) => {
        return {
          value: language_to,
          text: Weglot.getLanguageName(language_to)
        }
      }) || [];
      const lang = Weglot?.options?.language_from;
      const base = {
        value: lang,
        text: Weglot.getLanguageName(lang)
      }
      setAvailableLanguages([...availableLangs, base]);
      setCurrentLang(Weglot?.getCurrentLang() || 'en');
    });
  }, [setAvailableLanguages, setCurrentLang]);

  useEffect(() => {
    initWeglot();
  }, [initWeglot]);

  const switchLanguage = useCallback(({ target }) => {
    const Weglot = window.Weglot;

    Weglot?.switchTo(target.value);
    setCurrentLang(target.value);
  }, [])

  return (
    <header className={`bg-fern-green sticky top-0 z-30 ${menuIsOpen ? 'menu-open' : ''}`}>
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        onReady={initWeglot}
      />

      {menuIsOpen && <div className="bg-charcoal/70 fixed inset-0" />}
      <div className="promo-bar rte body--small flex max-lg:flex-col lg:gap-2 items-center justify-end lg:justify-center h-[3.75rem] lg:h-10 max-lg:mb-4 relative text-white">
        {promoBar && <PortableText value={promoBar} components={components} />}
      </div>
      <div className="bg-white flex xl:grid gap-8 xl:grid-cols-3 items-center justify-between min-h-20 px-5 max-lg:mt-4 lg:px-10 py-5 relative rounded-t-2xl text-green z-30">
        <Link href="/" className="h-8">
          <Logo />
        </Link>

        <nav className="nav-desktop body--large flex items-center justify-center max-xl:hidden">
          <ul className="flex gap-8">
            {nav.map((link) => (
                <li key={link._key} className={`${pathname === link.slug ? 'active' : ''}`}>
                  <LinkObject {...link} />
                </li>
            ))}
          </ul>
        </nav>

        <div className="buttons flex gap-3 max-xl:hidden  items-center justify-end">
          <select
            name="language-picker"
            id="languages"
            className="select select--lang"
            value={currentLang}
            onChange={switchLanguage}
          >
            {availableLanguages.map(({ value, text }) => {
              return <option key={value} value={value}>{text}</option>
            })}
          </select>

          <Link href="/check-eligibility" className="button button--green !min-h-10 !px-5">Check Eligibility</Link>
        </div>

        <div className="menu flex items-center xl:hidden">
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? <IconClose /> : <IconHamburger />}
          </button>
        </div>
      </div>

      <div className="xl:hidden absolute inset-x-0 text-green">
        <AnimatePresence>
          {menuIsOpen && (
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
                      <h1><LinkObject {...link} onNavigate={() => { console.log('Navigating...'); setMenuIsOpen(false); return; }} /></h1>
                     </li>
                  ))}
                </ul>

                <select
                  name="language-picker"
                  id="languages2"
                  className="select select--lang mt-6 mb-3"
                  value={currentLang}
                  onChange={switchLanguage}
                >
                  {availableLanguages.map(({ value, text }) => {
                    return <option key={value} value={value}>{text}</option>
                  })}
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
