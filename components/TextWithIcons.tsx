import Link from "next/link";
import IconArrow from "./IconArrow";

export default function TextWithIcons() {
  const icons = [
    'Medical Care',
    'Social Services',
    'Personal Care',
    'Transportation',
    'Nutrition',
    'Physical Therapy',
    'Pharmacy & Rx',
    '24/7 Care Access',
  ]

  return (
    <div className="text-with-icons bg-green lg:grid lg:grid-cols-2 my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius]">
      <div className="text-with-icons__text">
        <div className=" flex flex-col gap-6 max-w-[33rem] lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
          <div className="eyebrow">Our Services</div>
          <h4>Many older adults want to stay in their homes and communities as they age but may need extra support.</h4>
          <p className="body--large max-w-[30rem]">Habitat Health provides an alternative to nursing home care through the Program of All-Inclusive Care for the Elderly (PACE), helping older adults stay at home with a care team, meals, pharmacy access, and health insurance for eligible participants.</p>

          <Link href="/how-it-works" className="button button--arrow max-lg:hidden mt-4">
            <span>How it works</span>
            <IconArrow />
          </Link>
        </div>
      </div>
      <div className="text-with-icons__icons grid grid-cols-2 gap-[2.375rem] lg:gap-14 max-lg:my-10">
        {icons.map((icon) => (
          <div key={icon} className="body--large-semibold flex flex-col items-center gap-6">
            <svg width="47" height="70" viewBox="0 0 47 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.9285 66.4153V12.1345C46.9285 10.1583 45.3213 8.5505 43.3445 8.5505H33.9586L32.8353 6.03306C32.7195 5.77567 32.4642 5.60965 32.1824 5.60965H28.2217V4.72517C28.2217 2.11984 26.1026 0 23.4965 0C20.8905 0 18.7714 2.11984 18.7714 4.72517V5.60965H14.8107C14.5289 5.60965 14.2736 5.77567 14.1578 6.03306L13.0345 8.5505H3.65558C1.67874 8.5505 0.0715942 10.1583 0.0715942 12.1345V66.4153C0.0715942 68.3922 1.67874 70 3.65558 70H43.3445C45.3213 70 46.9285 68.3922 46.9285 66.4153ZM14.1321 9.59734C14.1505 9.56308 14.1662 9.52951 14.1789 9.49228L15.2739 7.03823H19.4857C19.8805 7.03823 20.1999 6.71875 20.1999 6.32394V4.72517C20.1999 2.90737 21.6787 1.42857 23.4965 1.42857C25.3143 1.42857 26.7931 2.90737 26.7931 4.72517V6.32394C26.7931 6.71875 27.1126 7.03823 27.5074 7.03823H31.7192L33.7058 11.4907H13.2873L14.1321 9.59734ZM45.4999 66.4153C45.4999 67.6039 44.5331 68.5714 43.3445 68.5714H3.65558C2.46696 68.5714 1.50017 67.6039 1.50017 66.4153V12.1345C1.50017 10.9459 2.46696 9.97907 3.65558 9.97907H12.397L11.5336 11.9141C11.436 12.1352 11.4555 12.3905 11.5867 12.5935C11.7192 12.7965 11.9452 12.9192 12.1866 12.9192H34.8065C35.0479 12.9192 35.2739 12.7965 35.4064 12.5935C35.5376 12.3905 35.5571 12.1352 35.4594 11.9141L34.596 9.97907H43.3445C44.5331 9.97907 45.4999 10.9459 45.4999 12.1345V66.4153Z" fill="#D8EEF6"/>
              <path d="M10.0142 33.4437H16.3479C16.6702 33.4437 16.9534 33.2275 17.0371 32.9157L18.9219 25.9458L20.1621 38.1996C20.1942 38.5288 20.4495 38.7925 20.7787 38.8357C20.8094 38.8399 20.8415 38.842 20.8722 38.842C21.1652 38.842 21.433 38.662 21.539 38.3823L24.7282 30.0278L26.1428 37.1832C26.1972 37.4609 26.4121 37.6799 26.6883 37.742C26.9618 37.7992 27.2505 37.6952 27.4193 37.4671L30.3714 33.4437H36.9771C37.3719 33.4437 37.6914 33.1242 37.6914 32.7294C37.6914 32.3346 37.3719 32.0151 36.9771 32.0151H30.01C29.7826 32.0151 29.5692 32.1233 29.4339 32.3067L27.2282 35.3117L25.6476 27.3123C25.5862 27.0005 25.3253 26.7661 25.0072 26.7396C24.6961 26.7103 24.3934 26.9 24.2804 27.1965L21.2796 35.0578L19.9528 21.9503C19.9193 21.6078 19.6445 21.3385 19.3013 21.3099C18.9609 21.2841 18.6442 21.5031 18.5536 21.8359L15.801 32.0151H10.0142C9.6194 32.0151 9.29993 32.3346 9.29993 32.7294C9.29993 33.1242 9.6194 33.4437 10.0142 33.4437Z" fill="#D8EEF6"/>
              <path d="M38.1559 49.2662H8.84368C8.44887 49.2662 8.12939 49.5857 8.12939 49.9805C8.12939 50.3753 8.44887 50.6948 8.84368 50.6948H38.1559C38.5507 50.6948 38.8702 50.3753 38.8702 49.9805C38.8702 49.5857 38.5507 49.2662 38.1559 49.2662Z" fill="#D8EEF6"/>
              <path d="M38.1559 58.3147H8.84368C8.44887 58.3147 8.12939 58.6342 8.12939 59.029C8.12939 59.4238 8.44887 59.7433 8.84368 59.7433H38.1559C38.5507 59.7433 38.8702 59.4238 38.8702 59.029C38.8702 58.6342 38.5507 58.3147 38.1559 58.3147Z" fill="#D8EEF6"/>
            </svg>
            <span>{icon}</span>
          </div>
        ))}
      </div>

      <Link href="/how-it-works" className="button button--arrow lg:hidden">
        <span>How it works</span>
        <IconArrow />
      </Link>
    </div>
  )
}