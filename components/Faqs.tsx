import Link from "next/link";
import FaqQa from "./FaqQa";
import IconArrow from "./IconArrow";

export default function Faqs() {
  return (
    <div className="faq bg-sky-blue my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green">
      <div className="faq__interior flex flex-col gap-0 max-w-[56.25rem] mx-auto">
        <p className="eyebrow">Frequently Asked Questions</p>

        <FaqQa
          question={"What is PACE?"}
          answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          index={0}
        />

        <FaqQa
          question={"What services does Habitat Health provide?"}
          answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          index={1}
        />

        <FaqQa
          question={"How is Habitat Health different from other senior care options and other PACE programs?"}
          answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          index={1}
        />

        <FaqQa
          question={"How do I know if I, or my family member, qualify?"}
          answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          index={1}
        />

        <FaqQa
          question={"When can I enroll with Habitat Health?"}
          answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          index={1}
        />
      </div>

      <div className="faq-more mt-10 lg:mt-14">
        <Link href="/faq" className="button button--arrow !w-[15rem] lg:mx-auto">
          <span>More FAQ</span>
          <IconArrow />
        </Link>
      </div>
    </div>
  )
}