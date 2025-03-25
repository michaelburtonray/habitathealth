import Image from "next/image";
import Button from "./Button";

export default function ImageWithText(props) {
  const { button, copy, eyebrow, image, isHero, isImageOnLeft, text,  title } = props;
  const getImageWithUrl = (image) => {
    if (!image) return;

    const {url, assetPath, alt} = image;

    return url
    ? <a href={url} target="_blank" rel="noreferrer">
        <Image
          src={assetPath}
          alt={alt}
          fill={true}
          className={`object-cover rounded-2xl w-full ${isHero && 'max-lg:rounded-t-none'}`}
        />
      </a>
    : <Image
        src={assetPath}
        alt={alt}
        fill={true}
        className={`object-cover rounded-[--radius] w-full ${isHero && 'max-lg:rounded-t-none'}`}
      />;
  };

  const sanitizedTitle = Array.isArray(title) ? null : title;
  const getText = (text) => {
    if (!text) return;

    if (isHero) return <h1>{text}</h1>
    else return <h3>{text}</h3>
  }

  return (
    <div className={`image-with-text lg:flex lg:gap-6 lg:justify-between my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green ${isHero ? 'bg-cream mt-0 relative rounded-t-none max-lg:px-0 max-lg:py-0' : 'bg-sky-blue'} ${isImageOnLeft && 'lg:flex-row-reverse'}`}>
      <div className={`image-with-text__text ${isHero && 'max-lg:absolute max-lg:bottom-10 max-lg:px-5 max-lg:text-white z-10'}`}>
        <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {sanitizedTitle &&  <div className="eyebrow">{sanitizedTitle}</div>}
          {getText(text)}
          {copy && <p className={`max-w-[30rem] ${isHero ? 'eyebrow' : 'body--large-semibold'}`}>{copy}</p>}

          <Button {...button} modifier="max-lg:hidden mt-4" />
        </div>
      </div>

      <div className={`image-with-text__image w-full lg:max-w-[50%] ${isHero ? 'my-0' : 'max-lg:my-10'}`}>
        <figure className={`aspect-square relative w-full ${isHero && 'max-lg:aspect-[35.8/55] max-lg:after:absolute max-lg:after:inset-0 max-lg:after:bg-black/30 max-lg:overflow-hidden max-lg:rounded-b-2xl'}`}>
          {getImageWithUrl(image)}
        </figure>
      </div>

      <Button {...button} modifier={'lg:hidden mt-4'} />
    </div>
  )
}
