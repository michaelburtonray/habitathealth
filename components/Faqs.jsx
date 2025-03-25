import FaqQa from "./FaqQa";
import Button from "./Button";

export default function Faqs(props) {
  const { button, faqQAs, title } = props;

  return (
    <div className="faq bg-sky-blue my-[--padding] px-5 lg:px-10 py-10 lg:py-20 rounded-[--radius] text-green">
      <div className="faq__interior flex flex-col gap-0 max-w-[56.25rem] mx-auto">
        <p className="eyebrow mb-5">{title}</p>

        {faqQAs.map((faqQA, idx) => (
          <FaqQa
            {...faqQA}
            key={faqQA._key}
            index={idx}
          />
        ))}
      </div>

      <div className="faq-more mt-10 lg:mt-14">
        <Button {...button} modifier={'!w-[15rem] lg:mx-auto'} />
      </div>
    </div>
  )
}