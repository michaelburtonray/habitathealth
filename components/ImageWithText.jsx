import Image from "next/image";
import Button from "./Button";

export default function ImageWithText(props) {
  const { button, copy, eyebrow, image, isImageOnLeft, text,  title } = props;
  const getImageWithUrl = (image) => {
    if (!image) return;

    const {url, assetPath, alt} = image;

    return url
    ? <a href={url} target="_blank" rel="noreferrer">
        <Image
          src={assetPath}
          alt={alt}
          fill={true}
          className="rounded-[--radius] w-full"
        />
      </a>
    : <Image
        src={assetPath}
        alt={alt}
        fill={true}
        className="rounded-[--radius] w-full"
      />;
  };

  return (
    <div className={`image-with-text bg-sky-blue lg:flex lg:justify-between my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green ${isImageOnLeft && 'lg:flex-row-reverse'}`}>
      <div className="image-with-text__text">
        <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <div className="eyebrow">{title}</div>}
          {text && <h4>{text}</h4>}
          {copy && <p className="body--large-semibold max-w-[30rem]">{copy}</p>}

          <Button {...button} modifier="max-lg:hidden mt-4" />
        </div>
      </div>

      <div className="image-with-text__image w-full lg:max-w-[50%] max-lg:my-10">
        <figure className="aspect-square relative w-full">
          {getImageWithUrl(image)}
        </figure>
      </div>

      <Button {...button} modifier={'lg:hidden mt-4'} />
    </div>
  )
}
