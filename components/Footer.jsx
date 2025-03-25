'use client'
import { PortableText } from "next-sanity";

import IconPhone from "./IconPhone";
import IconEmail from "./IconEmail";
import Logo from "./Logo";
import LinkObject from "./LinkObject";
import { useState } from "react";

export default function Footer(props) {
  const { contactInfo, copy, linkLists, regulatoryLinks, socialLinks } = props;
  const [date, setDate] = useState(new Date().getFullYear());

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

          return <p className="button button--slim flex gap-2 items-center !px-4 text-green">{icon}{children}</p>
        }

        return <p>{children}</p>
      }
    }
  }

  return (
    <footer className="footer bg-green mt-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-2xl">
      <div className="footer__top body--large lg:border-b flex flex-col gap-x-10 gap-y-14 xl:grid xl:grid-cols-4 lg:pb-10">
        <Logo />

        {linkLists.map(({ _key, links, title }, idx) => {
          return (
            <ul key={_key} className="flex flex-col gap-6">
              <li className="body--large-semibold">{title}</li>
              {links.map((link) => (
                <li key={link._key}><LinkObject {...link} /></li>
              ))}
            </ul>
          )
        })}

        <ul className="flex flex-col gap-6">
          <li className="body--large-semibold">Contact</li>
          <li className="rte flex flex-col gap-3">
            <PortableText value={contactInfo} components={components} />
          </li>
          <li className="flex gap-3">
            {socialLinks.map((link) => <LinkObject key={link._key} {...link} />)}
          </li>
        </ul>
      </div>

      <div className="footer__bottom flex flex-col gap-x-10 gap-y-14 xl:grid xl:grid-cols-4 max-lg:mt-14 lg:pt-10">
        <ul className="flex flex-col lg:grid lg:grid-cols-[subgrid] gap-y-3 col-start-2 col-span-2">
          {regulatoryLinks.map((link) => <li key={link._key}><LinkObject {...link} /></li>)}
        </ul>

        <p className="body">© Habitat Health {date}</p>

        <div className="rte *:!mt-0 body--small col-span-3 col-start-2 bg-fern-green flex flex-col gap-4 p-5 rounded-2xl">
          <PortableText value={copy} />
        </div>
      </div>
    </footer>
  )
}