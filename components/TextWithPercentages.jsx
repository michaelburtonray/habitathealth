import Button from "./Button";

export default function TextWithPercentages(props) {
  const { button, percentages, title } = props;
  const annotations =  percentages.map(({ _key, annotation }, idx) => {
    return annotation ? { _key, annotation, idx} : null;
  }).filter(Boolean);

  const getAnnotationNum = (key) => {
    const idx = annotations.findIndex(({ _key }) => _key === key);

    if (idx === -1) return '';

    return <sup>{idx + 1}</sup>;
  }

  return (
    <div className="text-with-percentages bg-green lg:gap-6 lg:grid lg:grid-cols-2 my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-2xl">
      <div className="text-with-percentages__text">
        <div className="flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <h2>{title}</h2>}
          <Button {...button} modifier="max-lg:hidden" />
        </div>
      </div>

      <div className="text-with-percentages__percentages max-lg:mt-10">
        {percentages.map(({ _key, annotation, text, value }, i) => (
          <div key={_key} className="border-b border-cream/50 flex lg:grid lg:grid-cols-[11.125rem_1fr] max-lg:flex-col gap-6 first:pt-0 py-10 lg:py-14">
            <div className="bg-fern-green flex items-center justify-center rounded-2xl w-[11.125rem] h-[7.375rem]">
              <h3>{value}</h3>
            </div>

            <div className="eyebrow">{text}{getAnnotationNum(_key)}</div>
          </div>
        ))}

        <ol className="body--small list-decimal list-inside mt-10 lg:mt-14 table">
          {annotations.map(({ _key, annotation }, i) => (
            <li key={_key} className="table-row before:table-cell before:text-right">{annotation}</li>
          ))}
        </ol>
      </div>
    </div>
  )
};
