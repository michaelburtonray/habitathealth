import { getBackgroundColor } from "./helpers";
import Image from "next/image";

export default function ImageWithTextGroup(props) {
  const { bgColor, content, text, title } = props;

  return (
    <div className={`image-with-text-group my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] ${getBackgroundColor(bgColor)}`}>
      {title &&<div className="eyebrow lg:text-center">{title}</div>}
      {text &&<h4 className="lg:text-center mt-6 mx-auto max-w-[46.875rem]">{text}</h4>}

      {content.map((c, index) => {
        const { _id, image, text, title } = c;
        return (
          <div className={`image-with-text lg:grid grid-cols-2 lg:gap-20 mt-16`} key={_id}>
            <div className={`image-with-text__text ${index % 2 === 0 && 'lg:order-2'}`}>
              <div className=" flex flex-col gap-6 max-w-[33rem] lg:py-[3.75rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
                {title && <div className="eyebrow">{title}</div>}
                {text && <h6>{text}</h6>}
              </div>
            </div>

            <div className="image-with-text__image lg:max-w-[50%] max-lg:my-10">
              <figure className="aspect-square lg:w-[40rem] relative">
                {image && image.assetPath && <Image
                  src={image.assetPath}
                  alt={image.alt}
                  fill={true}
                  className="object-cover w-full rounded-[--radius]"
                />}
              </figure>
            </div>
          </div>
        )
      })}
    </div>
  )
}