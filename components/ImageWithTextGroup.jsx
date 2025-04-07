'use client';

import Image from "next/image";
import { motion } from "motion/react";

import { getBackgroundColor } from "./helpers";

export default function ImageWithTextGroup(props) {
  const { bgColor, content, text, title } = props;

  return (
    <div className={`image-with-text-group my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] ${getBackgroundColor(bgColor)}`}>
      {(title || text) && <motion.div
        className="image-with-text-group__text"
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}>
        {title &&<div className="eyebrow lg:text-center">{title}</div>}
        {text &&<h3 className="lg:text-center mt-6 mx-auto max-w-[46.875rem]">{text}</h3>}
      </motion.div>}

      {content.map((c, index) => {
        const { _id, image, text, title } = c;
        return (
          <motion.div
            key={_id}
            className={`image-with-text lg:grid grid-cols-2 lg:gap-20 mt-16`}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={`image-with-text__text ${index % 2 === 0 && 'lg:order-2'}`}>
              <div className="flex flex-col gap-6 max-w-[33rem] lg:py-[3.75rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
                {title && <div className="body--large-semibold">{title}</div>}
                {text && <h5>{text}</h5>}
              </div>
            </div>

            <div className="image-with-text__image lg:max-w-full max-lg:my-10">
              <figure className="aspect-square lg:w-[40rem] relative max-w-full">
                {image && image.assetPath && <Image
                  src={image.assetPath}
                  alt={image.alt}
                  fill={true}
                  className="object-cover w-full rounded-[--radius]"
                />}
              </figure>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
