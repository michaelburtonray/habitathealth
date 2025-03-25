import { PortableText } from "next-sanity";

export default function TertiaryPageModule(props) {
  const { content, title } = props;

  return (
    <div className="bg-cream lg:grid gap-10 lg:grid-cols-3 px-5 lg:px-10 py-10 lg:py-20 rounded-b-2xl text-green">
      <div>
        <div className="lg:sticky lg:top-[calc(var(--header-height)+5.375rem)]">
          <div className="eyebrow">{title}</div>
        </div>
      </div>

      <div className="rte rte--tertiary body--large col-span-2 max-lg:mt-10 lg:pr-20 *:max-w-[32.5rem]">
        <PortableText value={content} />
      </div>
    </div>
  )
}