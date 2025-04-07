'use client';

import { motion } from "motion/react";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials(props) {
  const {testimonials, text, title} = props;

  return (
    <div className="testimonials bg-green px-5 lg:px-28 py-10 lg:py-[6.25rem] rounded-[--radius]">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title && <h3 className="mb-6 lg:text-center">{title}</h3>}
        {text && <p className="body--large-semibold lg:text-center">{text}</p>}
      </motion.div>

      <motion.div className="grid gap-10 gap-x-8 lg:grid-cols-2 mt-10 lg:mt-[3.1875rem]">
        {testimonials?.map((testimonial) => <TestimonialCard key={testimonial._key} {...testimonial} />)}
      </motion.div>
    </div>
  )
}
