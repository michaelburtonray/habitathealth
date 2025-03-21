import Button from "./Button";
import Image from "next/image";
import { getBackgroundColor } from "./helpers";

export default function TextWithIcons(props) {
  const { bgColor, button, copy, icons, isStacked, text, title } = props;
  const sanitizedString = (string) => Array.isArray(string) ? null : string;
  const getCols = () => isStacked && icons.length < 6 ? 'max-sm:grid-cols-1 max-xl:grid-cols-2 xl:flex lg:justify-between lg:gap-x-10' : 'lg:grid-cols-3'

  return (
    <div className={`text-with-icons my-[--padding] px-5 py-10 lg:py-20 rounded-2xl ${isStacked ? `lg:px-20` : 'lg:grid lg:grid-cols-2 lg:px-10'} ${getBackgroundColor(bgColor)}`}>
      <div className="text-with-icons__text">
        <div className={`flex flex-col gap-6 ${isStacked ? 'lg:gap-8 lg:items-center lg:text-center' : 'max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]'}`}>
          {sanitizedString(title) && isStacked ? <h3>{title}</h3> : <div className="eyebrow">{title}</div>}
          {sanitizedString(text) && <h3>{text}</h3>}
          {sanitizedString(copy) && <p className={`${isStacked ? 'eyebrow max-w-[43.5rem]' : 'body--large max-w-[30rem]'}`}>{copy}</p>}

          {!isStacked && <Button {...button} modifier="max-lg:hidden mt-4" />}
        </div>
      </div>

      <div className={`text-with-icons__icons grid grid-cols-2 gap-[2.375rem] lg:gap-14 max-lg:my-10 ${isStacked ? `max-lg:gap-x-5 max-lg:gap-y-10 lg:justify-center mt-10 lg:mt-14 ${getCols()}` : ''}`}>
        {icons.map((icon, idx) => (
          <div key={icon._key} className={`body--large-semibold flex flex-col gap-6 ${isStacked ? 'lg:max-w-[17.5rem]' : 'items-center'} ${idx%3 == 1 && isStacked && icons.length > 5 &&  'justify-self-center'} ${idx%3 == 2 && isStacked && icons.length > 5 && 'justify-self-end'}`}>
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
              {icon.text && <p className="body">{icon.text}</p>}
            </>}
          </div>
        ))}
      </div>

      <Button {...button} modifier={`${isStacked ? 'lg:mt-14 lg:mx-auto' : 'lg:hidden'}`} />
    </div>
  )
}