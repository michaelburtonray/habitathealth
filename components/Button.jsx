import Link from "next/link";
import IconArrow from "./IconArrow";

export default function Button(props) {
  const { formName, hasArrow, modifier, title, type, url } = props;

  if (Array.isArray(title) && !url) return null;

  if (type === 'submit') {
    return (
      <button type="submit" form={formName || ''} className={`button ${hasArrow ? 'button--arrow' : ''} ${modifier}`}>
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
