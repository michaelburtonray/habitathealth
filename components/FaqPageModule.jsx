'use client'
import { useRouter } from "next/navigation";
import FaqQa from "./FaqQa";

export default function FaqPageModule(props) {
  const { sections, title } = props;
  const router = useRouter();
  const handleChange = ({ target }) => {
    router.push(`#${target.value}`);
  }

  return (
    <div className="bg-cream lg:grid gap-10 lg:grid-cols-3 px-5 lg:px-10 py-10 lg:py-20 rounded-b-2xl text-green">
      <div className="">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+5.375rem)]">
          <div className="eyebrow">{title}</div>

          <ul className="flex flex-col gap-5 mt-12 max-lg:hidden">
            {sections.map(({ _id, title }, idx) => (
              <li key={_id+idx} className="">
                <a href={`#${_id}-${idx}`} className="flex items-center gap-2">
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <select
            name="topics"
            id="faq-topics"
            className="select lg:hidden mt-6 rounded-2xl"
            onChange={handleChange}
          >
            <option value="">Select</option>
            {sections.map(({ _id, title }, idx) => (
              <option key={_id+idx} value={`${_id}-${idx}`}>{title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-10 lg:gap-20 lg:pr-20 max-lg:mt-10">
        {sections.map(({ _id, faqQAs, title }, idx) => (
          <div key={_id+idx} id={`${_id}-${idx}`} className="-mt-[12rem] lg:-mt-[calc(var(--header-height)+5.375rem)] pt-[12rem] lg:pt-[calc(var(--header-height)+5.375rem)] pointer-events-none">
            <div className="faq__interior flex flex-col gap-0 max-w-[56.25rem] mx-auto pointer-events-auto">
              <p className="eyebrow mb-5">{title}</p>

              {faqQAs.map((faqQA, idx) => (
                <FaqQa
                  {...faqQA}
                  key={faqQA._key}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};