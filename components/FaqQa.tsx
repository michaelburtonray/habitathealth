'use client';

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

export default function FaqQa({ answer, index, question }: { answer: string, index: number, question: string }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, setIsExpanded]);

  return (
    <div className="faq_qa border-t border-green pt-6">
      <h5 className="cursor-pointer" onClick={handleClick}>{question}</h5>
      <AnimatePresence>
        {isExpanded && <motion.p
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          initial={{ height: 0, opacity: 0 }}
          className="max-w-[40rem] overflow-hidden pt-6"
        >{answer}</motion.p>}
      </AnimatePresence>
    </div>
  )
}