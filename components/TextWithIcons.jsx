'use client'

import Image from "next/image";
import { delay, motion } from "motion/react";

import Button from "./Button";
import { getBackgroundColor } from "./helpers";


export default function TextWithIcons(props) {
  const { bgColor, button, copy, icons, isStacked, text, title } = props;
  const sanitizedString = (string) => Array.isArray(string) ? null : string;
  const getBasis = () => {
    switch (icons.length) {
     case 2:
        return '*:lg:basis-1/2';
      case 3:
        return '*:lg:basis-1/3';
      case 4:
        return '*:lg:basis-1/4';
      case 5:
        return '*:lg:basis-1/5';
      default:
        return '';
    }
  }


  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, scale: .5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 }
  }


  const getCols = () => isStacked && icons.length < 6 ? `max-sm:grid-cols-1 max-xl:grid-cols-2 xl:flex lg:justify-between lg:gap-x-10 ${getBasis()}` : 'lg:grid-cols-3'

  return (
    <div className={`text-with-icons my-[--padding] px-5 py-10 lg:py-20 rounded-2xl ${isStacked ? `lg:px-20` : 'lg:grid lg:grid-cols-2 lg:px-10'} ${getBackgroundColor(bgColor)}`}>
      <motion.div
        className="text-with-icons__text"
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={`flex flex-col gap-6 ${isStacked ? 'lg:gap-8 lg:items-center lg:text-center' : 'max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]'}`}>
          {sanitizedString(title) && isStacked ? <h3 className={`${isStacked ? 'max-w-[43.5rem]' : ''}`}>{title}</h3> : <div className="eyebrow">{title}</div>}
          {sanitizedString(text) && <h3>{text}</h3>}
          {sanitizedString(copy) && <p className={`${isStacked ? 'body--large-semibold max-w-[43.5rem]' : 'body--large max-w-[30rem]'}`}>{copy}</p>}

          {!isStacked && <Button {...button} modifier="max-lg:hidden mt-4" />}
        </div>
      </motion.div>

      <motion.div
        className={`text-with-icons__icons grid grid-cols-2 gap-[2.375rem] lg:gap-14 max-lg:my-10 ${isStacked ? `max-lg:gap-x-5 max-lg:gap-y-10 lg:justify-center mt-10 lg:mt-14 ${getCols()}` : ''}`}
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }} // "once" means trigger only once; "amount" is how much of element should be visible
      >
        {icons.map((icon, idx) => (
          <motion.div
            key={icon._key}
            className={`body--large-semibold flex flex-col gap-6 ${isStacked ? `lg:max-w-[17.5rem]` : 'items-center'} ${idx%3 == 1 && isStacked && icons.length > 5 &&  'justify-self-center'} ${idx%3 == 2 && isStacked && icons.length > 5 && 'justify-self-end'}`}
            variants={itemVariants}
          >
            {icon && icon.assetPath && <>
              <figure className="icon aspect-square relative w-full max-w-[6.25rem]">
                <Image
                  src={icon.assetPath}
                  alt={icon.alt}
                  fill={true}
                  className="object-cover w-full"
                />
              </figure>
              <span>{icon.alt}</span>
              {icon.text && <p className="body">{icon.text}</p>}
            </>}
          </motion.div>
        ))}
      </motion.div>

      <Button {...button} modifier={`${isStacked ? 'lg:mt-14 lg:mx-auto' : 'lg:hidden'}`} />
    </div>
  )
}
