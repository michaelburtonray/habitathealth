import TestimonialCard from "./TestimonialCard";

export default function Testimonials(props) {
  const {testimonials, text, title} = props;

  return (
    <div className="testimonials bg-green px-5 lg:px-28 py-10 lg:py-[6.25rem] rounded-[--radius]">
      {title && <h3 className="mb-6 lg:text-center">{title}</h3>}
      {text && <p className="body--large-semibold lg:text-center">{text}</p>}

      <div className="grid gap-10 gap-x-8 lg:grid-cols-2 mt-10 lg:mt-[3.1875rem]">
        {testimonials?.map((testimonial) => <TestimonialCard key={testimonial._key} {...testimonial} />)}
      </div>
    </div>
  )
}
