"use client";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/lib/variants";

export default function TertiaryPageModule(props) {
  const { content, title } = props;

  const components = {
    types: {
      file: ({ value }) => {
        const { title, url } = value;

        return (
          <a href={`${url}`} target="_blank" rel="noopener noreferrer">{title}</a>
        )
      }
    }
  }

  return (
    <div className="bg-cream lg:grid gap-10 lg:grid-cols-3 px-5 lg:px-10 py-10 lg:py-20 rounded-b-2xl text-green">
      <motion.div
        className="lg:sticky lg:top-[calc(var(--header-height)+5.375rem)] self-start"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="eyebrow">{title}</div>
      </motion.div>

      <motion.div
        className="rte rte--tertiary body--large col-span-2 max-lg:mt-10 lg:pr-20 *:max-w-[32.5rem]"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <PortableText value={content} components={components} />
      </motion.div>
    </div>
  )
}
