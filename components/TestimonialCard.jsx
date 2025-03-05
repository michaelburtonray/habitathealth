import Image from "next/image";

export default function TestimonialCard(props) {
  const { image, name, text, title } = props;

  return (
    <div className="testimonial-card bg-sky-blue grid gap-6 lg:grid-cols-2 p-5 rounded-[--radius] text-green">
      <figure className="aspect-[24.7/29.9] bg-white body--large relative rounded-[--radius]">
        {image && image.assetPath && <Image
          src={image.assetPath}
          fill={true}
          alt={image.alt}
          className="object-cover rounded-[--radius] w-full"
        />}
      </figure>
      <div className="body--large flex flex-col gap-6 lg:py-5">
        {text && <p>”{text}”</p>}

        <div className="body--large-semibold">
          {name},<br />{title}
        </div>
      </div>
    </div>
  )
}