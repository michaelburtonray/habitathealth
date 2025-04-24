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
  const { contactList, cta, image, nav, promoBar } = props;
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
        auto_switch: true,
        auto_switch_fallback: 'en',
        cache: true,
        hide_switcher: true,
        wait_transition: true,
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

   // Closes menu on route change
   useEffect(() => {
    setMenuIsOpen(false);
  }, [currentLang, pathname]);

  const switchLanguage = useCallback(({ target }) => {
    const Weglot = window.Weglot;

    Weglot?.switchTo(target.value);
    setCurrentLang(target.value);
    document.documentElement.lang = target.value;
  }, [])

  return (
    <header className={`bg-fern-green sticky top-0 z-30 ${menuIsOpen ? 'menu-open' : ''}`}>
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        onReady={initWeglot}
      />

      {menuIsOpen && <div className="bg-charcoal/70 fixed inset-0" />}
      <div className="hh-weglot--dynamic promo-bar rte body--small flex max-lg:flex-col lg:gap-2 items-center justify-end lg:justify-center h-[3.75rem] lg:h-10 max-lg:mb-4 relative text-white">
        {promoBar && <PortableText value={promoBar} components={components} />}
      </div>
      <div className="overflow-hidden relative text-green z-30">
        <div className="bg-white flex xl:grid gap-8 xl:grid-cols-3 items-center justify-between min-h-20 max-lg:mt-4 px-5 lg:px-10 py-5 rounded-t-2xl w-full">
          <Link href="/" className="h-8">
            <Logo />
          </Link>

          <nav className="hh-weglot--dynamic nav-desktop body--large flex items-center justify-center max-xl:hidden">
            <ul className="flex gap-8">
              {nav.map((link) => (
                  <li
                    key={link._key}
                    className={`${link.internalLink && link.internalLink.slug === pathname.slice(1) ? 'active' : ''}`}
                  >
                    <LinkObject {...link} />
                  </li>
              ))}
            </ul>
          </nav>

          <div className="desktop-switcher buttons flex gap-3 max-xl:hidden  items-center justify-end">
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

            {cta && <Link href={cta.internalLink ? `/${cta.internalLink.slug}` : cta.url} className="hh-weglot--dynamic button button--green !min-h-10 !px-5">{cta.title || cta.internalLink.title}</Link>}
          </div>

          <div className="hh-weglot--dynamic menu flex items-center xl:hidden">
            <button
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              {menuIsOpen ? <IconClose /> : <IconHamburger />}
            </button>
          </div>
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
                <ul className="hh-weglot--dynamic flex flex-col gap-3">
                  {nav.map((link) => (
                     <li key={link._key} className={`${pathname.slice(1) === link?.internalLink.slug ? 'active' : ''}`}>
                      <h1>
                        <LinkObject
                          {...link}
                          onNavigate={() => { setMenuIsOpen(false) }}
                        />
                      </h1>
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

                {cta && <Link href={cta.internalLink ? `/${cta.internalLink.slug}` : cta.url} className="hh-weglot--dynamic button button--arrow button--green">
                  <span>{cta.title || cta.internalLink.title}</span>
                  <IconArrow />
                </Link>}

                {image && <figure className="aspect-square bg-green relative rounded-2xl my-6 w-full sm:max-w-[50%]">
                  {image.assetPath && <Image
                    src={image.assetPath}
                    alt={image.alt || 'Habitat Health'}
                    fill={true}
                    className="object-cover rounded-2xl"
                  />}
                </figure>}

                <div className="hh-weglot--dynamic flex flex-col gap-3">
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
