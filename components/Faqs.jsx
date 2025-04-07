'use client';

import { motion } from "motion/react";

import FaqQa from "./FaqQa";
import Button from "./Button";

export default function Faqs(props) {
  const { button, faqQAs, title } = props;


  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }



  return (
    <div className="faq bg-sky-blue my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green">
      <motion.div
        className="faq__interior flex flex-col gap-0 max-w-[56.25rem] mx-auto"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }} // "once" means trigger only once; "amount" is how much of element should be visible

      >
        <p className="eyebrow mb-5">{title}</p>

        {faqQAs.map((faqQA, idx) => (
          <motion.div
            key={faqQA._key}
            variants={itemVariants}
          >
            <FaqQa
              {...faqQA}
              index={idx}
            />
            </motion.div>
        ))}
      </motion.div>

      <div className="faq-more mt-10 lg:mt-14">
        <Button {...button} modifier={'!w-[15rem] lg:mx-auto'} />
      </div>
    </div>
  )
}
