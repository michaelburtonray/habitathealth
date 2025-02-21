import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="testimonials bg-green px-5 lg:px-28 py-10 lg:py-[6.25rem] rounded-[--radius]">
      <h2 className="mb-6 lg:text-center">Community Stories</h2>
      <p className="eyebrow lg:text-center">Hear From Our Patients, Providers, & Partners</p>

      <div className="grid gap-10 lg:grid-cols-2 mt-10 lg:mt-[3.1725rem]">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}