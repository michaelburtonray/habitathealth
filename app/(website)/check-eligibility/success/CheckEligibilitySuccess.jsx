'use client'
import { motion } from "motion/react";
import { PortableText } from "next-sanity";
import React, { useState } from "react";

import IconEmail from "@/components/IconEmail";
import IconPhone from "@/components/IconPhone";

export default function CheckEligibilitySuccess(props) {
  const {
    copy,
    sections,
    successCopy,
    title,
  } = props;

  const [steps] = useState(
    sections.filter(({ questions }) => questions && questions.length > 0)
  );

  const containerVariants = {
    initial: { opacity: 0 },
    transition: { duration: 0.8 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    }
  }

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  }

  const components = {
    block: {
      normal: ({ children }) => {
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

          return <p className="button button--green button--slim flex gap-2 items-center !px-4 text-white">{icon}{children}</p>
        }

        return <p>{children}</p>
      }
    }
  }

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-[8rem] px-5 lg:px-10 py-10 lg:p-20">
      <div>
        <motion.div
          className="flex flex-col gap-6 lg:gap-10 max-w-[36rem] lg:sticky lg:top-[calc(var(--header-height)+4.825rem)]"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 className="title" variants={itemVariants}>{title}</motion.h1>
          <motion.p className="eyebrow !max-w-[30rem]">{copy}</motion.p>
        </motion.div>
      </div>

      <div className={`bg-white max-lg:mt-10 px-5 lg:px-10 py-10 lg:py-14 rounded-2xl`}>
        <div className="flex flex-col gap-10">
          <div className={`form-nav flex gap-4 justify-between w-full pointer-events-none`}>
            {steps?.map(({ _key, title }, idx) => {
              return (
                <React.Fragment key={_key}>
                  {idx !== 0 && <div className="flex max-lg:hidden items-center w-full">
                    <span className="bg-green/40 w-full h-[0.125rem]" />
                  </div>}
                  <button
                    key={_key}
                    className={`body--large flex gap-3 items-center pointer-events-none`}
                  >
                    <span className={`bg-cream border-cream box-border border inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors`}>
                      <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5031 2L7.50293 14.0002L1.49609 7.99331" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {title}
                  </button>
                </React.Fragment>
              )
            })}
          </div>

          <div className={`rte bg-sky-blue p-5 rounded-2xl`}>
            <PortableText value={successCopy} components={components} />
          </div>
        </div>
      </div>
    </div>
  );
}
