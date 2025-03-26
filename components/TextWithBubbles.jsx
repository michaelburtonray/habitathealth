import { PortableText } from "next-sanity";

export default function TextWithBubbles(props) {
  const { bubbles, disclaimer, title } = props;

  return (
    <div className="text-with-bubbles bg-green lg:grid lg:grid-cols-2 -mt-[--padding] pb-10 lg:pb-20 px-5 lg:px-10 rounded-b-2xl">
      <div className="text-with-bubbles__text">
        <div className="flex flex-col gap-6 max-w-[35rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <h3>{title}</h3>}
        </div>
      </div>

      <div className="body--semibold lg:body--large-semibold flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-10 max-lg:mt-6">
        {bubbles.map((text, idx) => (
          <div key={'bubble'+idx} className="bg-fern-green p-5 rounded-2xl">
            {text}
          </div>
        ))}

        <div className="bg-fern-green col-span-full p-5 rounded-2xl rte">
          <PortableText value={disclaimer} />
        </div>
      </div>
    </div>
  )
}