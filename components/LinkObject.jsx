import Link from "next/link";

import IconPhone from "./IconPhone";
import IconEmail from "./IconEmail";

export default function LinkObject(props) {
  const { file, internalLink, isButton, lang, modifiers, title, url, onNavigate } = props;
  let icon = null;

  switch (title) {
    case 'Instagram':
      icon = (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.57 8.14355C21.77 8.14355 21.12 8.79356 21.12 9.59356C21.12 10.3936 21.77 11.0436 22.57 11.0436C23.37 11.0436 24.02 10.3936 24.02 9.59356C24.02 8.79356 23.37 8.14355 22.57 8.14355Z" fill="currentColor"/>
          <path d="M16.1 10.0137C12.73 10.0137 9.98999 12.7537 9.98999 16.1237C9.98999 19.4937 12.73 22.2337 16.1 22.2337C19.47 22.2337 22.21 19.4937 22.21 16.1237C22.21 12.7537 19.47 10.0137 16.1 10.0137ZM16.1 20.0337C13.94 20.0337 12.19 18.2737 12.19 16.1237C12.19 13.9737 13.95 12.2137 16.1 12.2137C18.25 12.2137 20.01 13.9737 20.01 16.1237C20.01 18.2737 18.25 20.0337 16.1 20.0337Z" fill="currentColor"/>
          <path d="M20.95 28.5236H11.05C6.93997 28.5236 3.59998 25.1836 3.59998 21.0736V11.1736C3.59998 7.06363 6.93997 3.72363 11.05 3.72363H20.95C25.06 3.72363 28.4 7.06363 28.4 11.1736V21.0736C28.4 25.1836 25.06 28.5236 20.95 28.5236ZM11.05 6.05363C8.22997 6.05363 5.92998 8.35363 5.92998 11.1736V21.0736C5.92998 23.8936 8.22997 26.1936 11.05 26.1936H20.95C23.77 26.1936 26.07 23.8936 26.07 21.0736V11.1736C26.07 8.35363 23.77 6.05363 20.95 6.05363H11.05Z" fill="currentColor"/>
        </svg>
      )
      break;

    case 'LinkedIn':
      icon = (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40101 12.1017H9.38329V28.0936H4.40101V12.1017ZM6.89215 4.1543C8.48405 4.1543 9.77215 5.44241 9.77215 7.03431C9.77215 8.62621 8.48405 9.91431 6.89215 9.91431C5.30025 9.91431 4 8.62621 4 7.03431C4 5.44241 5.2881 4.1543 6.89215 4.1543Z" fill="currentColor"/>
          <path d="M12.5063 12.1012H17.2698V14.2886H17.3306C17.999 13.0248 19.6152 11.7002 22.0334 11.7002C27.0643 11.7002 28 15.0055 28 19.3194V28.0931H23.0298V20.3159C23.0298 18.4566 22.9934 16.0749 20.4415 16.0749C17.8896 16.0749 17.4643 18.0921 17.4643 20.1822V28.0931H12.4941V12.1012H12.5063Z" fill="currentColor"/>
        </svg>
      )
      break;

    case 'X':
      icon = (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2779 14.2533L27.2087 3.86426H25.0947L17.3396 12.8855L11.1446 3.86426H4L13.3716 17.4978L4 28.3843H6.11398L14.3099 18.8657L20.8554 28.3843H28L18.2779 14.242V14.2533ZM15.3726 17.6221L14.423 16.2656L6.8714 5.45823H10.1272L16.2204 14.1742L17.17 15.5308L25.0947 26.8694H21.8389L15.3726 17.6221Z" fill="currentColor"/>
        </svg>
      )
      break;

    case 'YouTube':
      icon = (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 12.7317C29 9.57581 26.4505 7.02637 23.2946 7.02637H8.7054C5.54946 7.02637 3 9.57581 3 12.7317V19.5153C3 22.6713 5.54946 25.2207 8.7054 25.2207H23.2946C26.4505 25.2207 29 22.6713 29 19.5153V12.7317ZM20.4307 16.6402L13.8942 19.8747C13.6358 20.0095 12.771 19.8298 12.771 19.5378V12.889C12.771 12.597 13.6471 12.406 13.9054 12.552L20.1723 15.9551C20.4306 16.1011 20.7114 16.4829 20.4419 16.6289L20.4307 16.6402Z" fill="currentColor"/>
        </svg>
      )
      break;

    default:
      break;
  }

  if (isButton) {
    if (url.includes('tel')) {
      icon = <IconPhone />
    } else if (url.includes('mailto')) {
      icon = <IconEmail />
    }
  }

  return internalLink
    ? (
      <Link
        href={`/${internalLink.slug}${lang ? `?lang=${lang}` : ''}`}
        className={modifiers}
        onNavigate={onNavigate}
      >
        {title || internalLink.title}
      </Link>
    )
    : (
      <a
        href={url || file.url || '/'}
        className={`${modifiers} ${isButton ? 'button button--slim flex gap-2 items-center !px-4' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        onNavigate={onNavigate}
      >
        {icon}
        <span className={(icon && !isButton) ? 'hidden' : ''}>{title}</span>
      </a>
    )
};
