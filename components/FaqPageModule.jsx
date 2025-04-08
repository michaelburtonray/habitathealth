'use client'

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

import FaqQa from "./FaqQa";
import handleize from "@/lib/handleize";

export default function FaqPageModule(props) {
  const { sections, title } = props;
  const router = useRouter();
  const handleChange = ({ target }) => {
    router.push(`#${target.value}`);
  }

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
    <div className="bg-cream lg:grid gap-10 lg:grid-cols-3 px-5 lg:px-10 py-10 lg:py-20 rounded-b-2xl text-green">
      <div className="">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+5.375rem)]">
          <div className="eyebrow">{title}</div>

          <ul className="body--semibold flex flex-col gap-5 mt-12 max-lg:hidden">
            {sections.map(({ _id, title }, idx) => (
              <li key={_id+idx} className="">
                <a href={`#${handleize(title)}`} className="flex items-center gap-2">
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <select
            name="topics"
            id="faq-topics"
            className="select lg:hidden mt-6 rounded-2xl"
            onChange={handleChange}
          >
            <option value="">Select</option>
            {sections.map(({ _id, title }, idx) => (
              <option key={_id+idx} value={handleize(title)}>{title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-10 lg:gap-20 lg:pr-20 max-lg:mt-10">
        {sections.map(({ _id, faqQAs, title }, idx) => (
          <div key={_id+idx} id={handleize(title)} className="scroll-mt-[calc(var(--header-height)+5.375rem)] lg:scroll-mt-[calc(var(--header-height)+5.375rem)] pointer-events-none">
            <motion.div
              className="faq__interior flex flex-col gap-0 max-w-[56.25rem] mx-auto pointer-events-auto"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="eyebrow mb-5">{title}</p>

              {faqQAs.map((faqQA, idx) => (
                <motion.div
                  key={faqQA._key}
                  variants={itemVariants}
                >
                  <FaqQa {...faqQA} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
};
