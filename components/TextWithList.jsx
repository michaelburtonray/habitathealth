import Button from "./Button";

export default function TextWithList(props) {
  const { button, list, text, title } = props;

  return (
    <div className="text-with-list bg-green lg:grid lg:gap-6 lg:grid-cols-2 my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-2xl">
      <div className="text-with-list__text">
        <div className="flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <h3>{title}</h3>}
          {text && <p className="body--large-semibold">{text}</p>}
          <Button {...button} modifier="max-lg:hidden" />
        </div>
      </div>

      <div className="text-with-list__list flex flex-col gap-10 lg:gap-14 max-lg:my-10">
        {list.map(({ _key, text, title }, idx) => (
          <div key={_key} className="flex flex-col gap-6 max-w-[22.5rem]">
            <span className="bg-fern-green flex items-center justify-center rounded-full text-[2.5rem] w-[4.375rem] h-[4.375rem]">{idx+1}</span>
            <span className="body--large-semibold lg:mt-2">{title}</span>
            <p className="body--large">{text}</p>
          </div>
        ))}
      </div>

      <Button {...button} modifier="lg:hidden mt-10" />
    </div>
  )
}