export default function TextWithPercentages(props) {
  const { button, percentages, title } = props;

  return (
    <div className="text-with-percentages">
      {title && <h2>{title}</h2>}
    </div>
  )
}