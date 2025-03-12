import Button from "./Button";

export default function TextWithChart(props) {
  const { button, chart, disclaimer, text, title } = props;
  const { labels, rows } = chart;

  return (
    <div className="text-with-chart bg-cream lg:grid lg:grid-cols-2 my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-2xl text-green">
      <div className="text-with-chart__text">
        <div className="flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          {title && <h2>{title}</h2>}
          {text && <p className="eyebrow">{text}</p>}
          <Button {...button} modifier="" />
        </div>
      </div>

      <div className="text-with-chart__chart max-lg:mt-10">
        <div className="border border-green grid grid-cols-2 rounded-2xl">
          {labels.map((label, idx) => <div key={label+idx} className={`body--large-semibold p-4 lg:p-6 ${idx === 0 && 'border-r border-green'}`}>{label}</div>)}

          {rows.map(({ _key, col1, col2}, idx) => (
            <div key={_key} className={`body--large border-t border-green col-span-2 grid grid-cols-2`}>
              <div className={`p-4 lg:p-6 border-r border-green`}>{col1}</div>
              <div className={`p-4 lg:p-6`}>{col2}</div>
            </div>
          ))}
        </div>

        {disclaimer && <p className="mt-6 lg:mt-10">{disclaimer}</p>}
      </div>
    </div>
  )
}