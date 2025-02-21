export default function TestimonialCard() {
  return (
    <div className="testimonial-card bg-sky-blue grid gap-6 lg:grid-cols-2 p-5 rounded-[--radius] text-green">
      <figure className="aspect-[24.7/29.9] bg-white body--large rounded-[--radius]"></figure>
      <div className="body--large flex flex-col gap-6 lg:py-5">
        <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore.”</p>

        <div className="body--large-semibold">
          Name,<br />Habitat Health Provider
        </div>
      </div>
    </div>
  )
}