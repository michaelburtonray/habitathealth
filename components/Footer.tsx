import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer bg-green body--large mt-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-t-2xl">
      <div className="footer__top lg:border-b flex flex-col gap-14 lg:gap-20 lg:grid lg:grid-cols-4 lg:pb-10">
        <Logo />

        <ul className="flex flex-col gap-8">
          <li className="body--large-semibold">PACE Program</li>
          <li><Link href="/how-it-works">How It Works</Link></li>
          <li><Link href="/our-locations">Our Locations</Link></li>
          <li><Link href="/">Am I Eligible?</Link></li>
        </ul>

        <ul className="flex flex-col gap-8">
          <li className="body--large-semibold">Company</li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/careers">Careers</Link></li>
        </ul>

        <ul className="flex flex-col gap-8">
          <li className="body--large-semibold">Contact</li>
          <li className="flex flex-col gap-3">
            <Link href="/" className="button button--slim flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="currentColor"/>
              </svg>
              <span className="underline">1-844-664-2248,</span> TTY: 711
            </Link>
            <a href="mailto:info@habitathealth.com" className="button button--slim flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.87868 6.037C3 6.91568 3 8.3299 3 11.1583V13.1583C3 15.9868 3 17.401 3.87868 18.2796C4.75736 19.1583 6.17157 19.1583 9 19.1583H15C17.8284 19.1583 19.2426 19.1583 20.1213 18.2796C21 17.401 21 15.9868 21 13.1583V11.1583C21 8.3299 21 6.91568 20.1213 6.037C19.2426 5.15833 17.8284 5.15833 15 5.15833H9C6.17157 5.15833 4.75736 5.15833 3.87868 6.037ZM6.5547 8.32627C6.09517 8.01992 5.4743 8.1441 5.16795 8.60363C4.8616 9.06315 4.98577 9.68402 5.4453 9.99038L10.8906 13.6206C11.5624 14.0684 12.4376 14.0684 13.1094 13.6206L18.5547 9.99038C19.0142 9.68402 19.1384 9.06315 18.8321 8.60363C18.5257 8.1441 17.9048 8.01992 17.4453 8.32627L12 11.9565L6.5547 8.32627Z" fill="#003F3A"/>
              </svg>
              <span className="underline">info@habitathealth.com</span>
            </a>
          </li>
          <li className="body">
            39 Arkansas St.<br />San francisco, CA 94107
          </li>
          <li className="flex gap-3">
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2779 14.2533L27.2087 3.86426H25.0947L17.3396 12.8855L11.1446 3.86426H4L13.3716 17.4978L4 28.3843H6.11398L14.3099 18.8657L20.8554 28.3843H28L18.2779 14.242V14.2533ZM15.3726 17.6221L14.423 16.2656L6.8714 5.45823H10.1272L16.2204 14.1742L17.17 15.5308L25.0947 26.8694H21.8389L15.3726 17.6221Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.57 8.14355C21.77 8.14355 21.12 8.79356 21.12 9.59356C21.12 10.3936 21.77 11.0436 22.57 11.0436C23.37 11.0436 24.02 10.3936 24.02 9.59356C24.02 8.79356 23.37 8.14355 22.57 8.14355Z" fill="white"/>
                <path d="M16.1 10.0137C12.73 10.0137 9.98999 12.7537 9.98999 16.1237C9.98999 19.4937 12.73 22.2337 16.1 22.2337C19.47 22.2337 22.21 19.4937 22.21 16.1237C22.21 12.7537 19.47 10.0137 16.1 10.0137ZM16.1 20.0337C13.94 20.0337 12.19 18.2737 12.19 16.1237C12.19 13.9737 13.95 12.2137 16.1 12.2137C18.25 12.2137 20.01 13.9737 20.01 16.1237C20.01 18.2737 18.25 20.0337 16.1 20.0337Z" fill="white"/>
                <path d="M20.95 28.5236H11.05C6.93997 28.5236 3.59998 25.1836 3.59998 21.0736V11.1736C3.59998 7.06363 6.93997 3.72363 11.05 3.72363H20.95C25.06 3.72363 28.4 7.06363 28.4 11.1736V21.0736C28.4 25.1836 25.06 28.5236 20.95 28.5236ZM11.05 6.05363C8.22997 6.05363 5.92998 8.35363 5.92998 11.1736V21.0736C5.92998 23.8936 8.22997 26.1936 11.05 26.1936H20.95C23.77 26.1936 26.07 23.8936 26.07 21.0736V11.1736C26.07 8.35363 23.77 6.05363 20.95 6.05363H11.05Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.40101 12.1017H9.38329V28.0936H4.40101V12.1017ZM6.89215 4.1543C8.48405 4.1543 9.77215 5.44241 9.77215 7.03431C9.77215 8.62621 8.48405 9.91431 6.89215 9.91431C5.30025 9.91431 4 8.62621 4 7.03431C4 5.44241 5.2881 4.1543 6.89215 4.1543Z" fill="white"/>
                <path d="M12.5063 12.1012H17.2698V14.2886H17.3306C17.999 13.0248 19.6152 11.7002 22.0334 11.7002C27.0643 11.7002 28 15.0055 28 19.3194V28.0931H23.0298V20.3159C23.0298 18.4566 22.9934 16.0749 20.4415 16.0749C17.8896 16.0749 17.4643 18.0921 17.4643 20.1822V28.0931H12.4941V12.1012H12.5063Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 12.7317C29 9.57581 26.4505 7.02637 23.2946 7.02637H8.7054C5.54946 7.02637 3 9.57581 3 12.7317V19.5153C3 22.6713 5.54946 25.2207 8.7054 25.2207H23.2946C26.4505 25.2207 29 22.6713 29 19.5153V12.7317ZM20.4307 16.6402L13.8942 19.8747C13.6358 20.0095 12.771 19.8298 12.771 19.5378V12.889C12.771 12.597 13.6471 12.406 13.9054 12.552L20.1723 15.9551C20.4306 16.1011 20.7114 16.4829 20.4419 16.6289L20.4307 16.6402Z" fill="white"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__bottom flex flex-col gap-14 lg:gap-20 lg:grid lg:grid-cols-4 lg:pt-10">
        <ul className="flex flex-col gap-8 col-start-2">
          <li>Regulatory Notices</li>
          <li>Language Assistance Service</li>
        </ul>

        <ul className="flex flex-col gap-8">
          <li>Non-deiscrimination Policy</li>
          <li>Privacy Policy</li>
        </ul>

        <p className="body">© Habitat Health 2025</p>

        <div className="body--small col-span-3 col-start-2 bg-fern-green flex flex-col gap-5 lg:-ml-10 p-5 rounded-2xl">
          <p>H6537_05 CMS Approved 12/11/24; H6537_W0125 Pending CMS approval</p>
          <p>All imagery used are stock images, not actual Habitat Health participants.</p>
        </div>
      </div>
    </footer>
  )
}