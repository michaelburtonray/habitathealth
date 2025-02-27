import Button from "./Button";
import Image from "next/image";

export default function TextWithIcons(props) {
  const { button, copy, icons, text, title } = props;

  return (
    <div className="text-with-icons bg-green lg:grid lg:grid-cols-2 my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius]">
      <div className="text-with-icons__text">
        <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <div className="eyebrow">{title}</div>}
          {text && <h4>{text}</h4>}
          {copy && <p className="body--large max-w-[30rem]">{copy}</p>}

          <Button {...button} modifier="max-lg:hidden mt-4" />
        </div>
      </div>
      <div className="text-with-icons__icons grid grid-cols-2 gap-[2.375rem] lg:gap-14 max-lg:my-10">
        {icons.map((icon) => (
          <div key={icon._key} className="body--large-semibold flex flex-col items-center gap-6">
            {icon && icon.assetPath && <>
              <figure className="icon aspect-square relative w-full max-w-[6.25rem]">
                <Image
                  src={icon.assetPath}
                  alt={icon.alt}
                  fill={true}
                  className="object-cover w-full"
                />
              </figure>
              <span>{icon.alt}</span>
            </>}
          </div>
        ))}
      </div>

      <Button {...button} modifier={'lg:hidden'} />
    </div>
  )
}