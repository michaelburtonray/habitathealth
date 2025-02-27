import Link from "next/link";
import IconArrow from "./IconArrow";

export default function Button(props) {
  const { hasArrow, title, url } = props;
  return (
    <Link href={url} className={`button ${hasArrow && 'button--arrow'}`}>
      <span>{title || 'Check'}</span>

      {hasArrow && <IconArrow />}
    </Link>
  )
}