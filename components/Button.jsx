import Link from "next/link";
import IconArrow from "./IconArrow";

export default function Button(props) {
  const { hasArrow, modifier, title, type, url } = props;

  if (type === 'submit') {
    return (
      <button type="submit" className={`button ${hasArrow && 'button--arrow'} ${modifier}`}>
        <span>{title || 'Check'}</span>

        {hasArrow && <IconArrow />}
      </button>
    )
  } else {
    return (
      <Link href={url || '/'} className={`button ${hasArrow && 'button--arrow'} ${modifier}`}>
        <span>{title || 'Check'}</span>

        {hasArrow && <IconArrow />}
      </Link>
    )
  }
}