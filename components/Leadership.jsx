import Image from "next/image";

export default function Leadership(props) {
  const { leaders, title } = props;

  return (
    <div className="leadership bg-cream my-[--padding] px-5 lg:px-[11.25rem] py-10 lg:py-20 rounded-2xl text-green">
      {title && <h4 className="lg:max-w-[33rem] lg:mx-auto">{title}</h4>}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-14 mt-10 lg:mt-14">
        {leaders.map(({ _key, image, name, title: t }) => (
          <div key={_key} className="">
            <figure className="icon aspect-square relative w-[4.375rem]">
              {image && <Image
                src={image.assetPath}
                alt={`${name} - ${title}`}
                fill={true}
                className="object-cover w-full"
              />}
            </figure>
            <p className="mt-6 flex flex-col">
              {name && <span className="body--semibold">{name}</span>}
              {t && <span >{t}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}