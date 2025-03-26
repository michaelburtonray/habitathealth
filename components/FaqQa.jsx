'use client';

import { AnimatePresence, motion } from "motion/react";
import { PortableText } from "next-sanity";
import { useCallback, useState } from "react";

export default function FaqQa({ answer, index, question }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, setIsExpanded]);

  return (
    <div className="faq_qa border-t border-green pt-6">
      <h4 className="cursor-pointer mb-6" onClick={handleClick}>{question}</h4>
      <AnimatePresence>
        {isExpanded && <motion.div
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          initial={{ height: 0, opacity: 0 }}
          className="max-w-[40rem] overflow-hidden"
        >
          <div className="rte pb-6">
            <PortableText value={answer} />
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}