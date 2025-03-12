export default function TextWithChart(props) {
  const { button, chart, disclaimer, text, title } = props;

  return (
    <div className="text-with-list">
      {title && <h2>{title}</h2>}
    </div>
  )
}