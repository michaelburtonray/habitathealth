import Button from "@/components/Button";
import Image from "next/image";

export default function Hero(props) {
  const { title, copy, button, image, mobileImage } = props;
  console.log(props);

  return (
    <div className="hero grid grid-cols-2">
      <figure className="hero__image bg-green -mr-[100%] overflow-hidden relative rounded-b-2xl" style={{ aspectRatio: image.aspectRatio }}>
        {image && image.assetPath && <Image
          src={image.assetPath}
          fill={true}
          alt="Habitat Health"
          className="object-cover w-full max-lg:hidden"
        />}
        {mobileImage && mobileImage.assetPath && <Image
          src={mobileImage.assetPath}
          fill={true}
          alt="Habitat Health"
          className="object-cover w-full lg:hidden" />}
      </figure>
      <div className="hero-text box-content flex max-w-[32.125rem] -ml-[100%] p-5 lg:p-10">
        <div className="flex flex-col gap-6 mt-auto rte sticky bottom-10">
          {title && <h1>{title}</h1>}
          {copy && <p className="body--large">{copy}</p>}
          <Button {...button} />
        </div>
      </div>
    </div>
  )
}