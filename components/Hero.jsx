'use client';

import Button from "@/components/Button";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

import { motion } from "motion/react";

export default function Hero(props) {
  const { title, copy, button, image, mobileImage } = props;

  return (
    <motion.div
      className="hero grid grid-cols-2"
    >
      <motion.figure
        className="hero__image max-lg:!aspect-[35.8/55] bg-green -mr-[100%] overflow-hidden relative rounded-b-2xl lg:w-[200%] lg:max-h-[calc(100svh-9.5rem)]" style={{ aspectRatio: image.aspectRatio }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <picture>
            {image && <source media="(min-width: 1536px)" srcSet={urlForImage(image).width(1440).format('webp').url()} />}
            {image && <source media="(min-width: 1280px)" srcSet={urlForImage(image).width(1216).format('webp').url()} />}
            {image && <source media="(min-width: 1024px)" srcSet={urlForImage(image).width(1200).format('webp').url()} />}
            {mobileImage && <source media="(min-width:  768px)" srcSet={urlForImage(mobileImage).width(1472).format('webp').url()} />}
            {mobileImage && <source media="(min-width:  640px)" srcSet={urlForImage(mobileImage).width(1216).format('webp').url()} />}
            {mobileImage && <source srcSet={urlForImage(mobileImage).width(786).format('webp').url()} />}
            <img
              fill="true"
              loading="eager"
              alt="Habitat Health"
              className="object-cover w-full"
            />
          </picture>


        </motion.div>
      </motion.figure>
      <motion.div className="hero-text box-content flex max-w-[32.125rem] -ml-[100%] p-5 lg:p-10">
        <div className="flex flex-col gap-6 mt-auto sticky bottom-10">
          {title && <h1>{title}</h1>}
          {copy && <p className="body--large">{copy}</p>}
          <Button {...button} />
        </div>
      </motion.div>
    </motion.div>
  )
}
