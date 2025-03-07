'use client'

import React, { useActionState, useCallback, useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Answers from "@/components/Answers";
import { schema } from "@/sanity/schema";

export default function CheckEligibility(props) {
  const { copy, cta, disclaimer, intro, sections, title } = props;
  const [currentSection, setCurrentSection] = useState(-1);
  const [steps, setSteps] = useState(sections.filter(({ questions }) => questions && questions.length > 0));
  const [formDataState, setFormDataState] = useState({});

  const initialState = {
    message: '',
  }

  // const [actionState, formAction, isPending] = useActionState

  const handleChange = useCallback((e) => {
    const { name, type, value } = e.target;
    const prevFormDataState = formDataState;

    setFormDataState({ ...prevFormDataState, [name]: value });

    if (type === 'radio') setCurrentSection(currentSection + 1);
  }, [currentSection, formDataState, setFormDataState]);

  const handleSubmit = (e) => {
    if (currentSection < steps.length - 1) {
      e.preventDefault();
      setCurrentSection(currentSection + 1);
    }
  }

  const handleIntroSubmit = (e) => {
    e.preventDefault();
    setCurrentSection(0);
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-[8rem] px-5 lg:px-10 py-10 lg:p-20">
      <div className="">
        <div className="flex flex-col gap-6 lg:gap-10 max-w-[36rem] lg:sticky lg:top-[calc(var(--header-height)+4.825rem)]">
          <h1>{title}</h1>
          {currentSection === -1 && (
            <>
              <p className="eyebrow !max-w-[30rem]">{intro}</p>
              <form method="post" onSubmit={handleIntroSubmit}>
                {cta && <Button {...cta} type={'submit'} />}
              </form>
            </>
          )}

          {currentSection > -1 && (
            <p className="eyebrow !max-w-[30rem]">{copy}</p>
          )}
        </div>
      </div>

      <div className={`bg-white flex flex-col gap-10 max-lg:mt-10 px-5 lg:px-10 py-10 lg:py-14 rounded-2xl ${currentSection === -1 && 'lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14'}`}>
        {currentSection === -1 && (
          <>
            {sections.map(({ _key, copy, image, subtitle }) => (
              <div key={_key} className="flex flex-col gap-6">
                {image && image.assetPath && <>
                  <figure className="aspect-square relative w-full max-w-[6.25rem]">
                    <Image
                      src={image.assetPath}
                      alt={image.alt}
                      fill={true}
                      className="object-cover w-full"
                    />
                  </figure>
                </>}
                <p className="body--semibold">{subtitle}</p>
                <p>{copy}</p>
              </div>
            ))}

            {disclaimer && (
              <div className="disclaimer col-span-full border-t border-green/40 pt-10">
                <p className="body--small">{disclaimer}</p>
              </div>
            )}
          </>
        )}

        {currentSection > -1 && (
          <>
            <div className="form-nav flex gap-4 justify-between w-full">
              {steps?.map(({ _key, title }, idx) => {
                const isActive = idx === currentSection;
                return (
                  <React.Fragment key={_key}>
                    {idx !== 0 && <div className="flex max-lg:hidden items-center w-full">
                      <span className="bg-green/40 w-full h-[0.125rem]" />
                    </div>}
                    <button
                      key={_key}
                      onClick={() => setCurrentSection(idx)}
                      className={`body--large flex gap-3 items-center ${!isActive && 'max-lg:hidden'}`}
                    >
                      <span className={`box-border border border-green inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isActive && 'bg-green text-white'}`}>
                        {idx + 1}
                      </span>
                      {title}
                    </button>
                  </React.Fragment>
                )
              })}
            </div>

            <form action={`mailto:rinaldy@human-nyc.com?body=${formDataState}`} onSubmit={handleSubmit}>
              {steps?.map(({ _key, questions }, idx) => {
                return (
                  <fieldset key={_key} className={`mt-10 ${idx === currentSection ? 'block' : 'hidden'}`}>
                    {questions.map(({ _key, _type, answers, info, question }, idx) => {
                      return (
                        <React.Fragment key={_key}>
                          {question && idx === 0 && <h4>{question}</h4>}
                          {info && <p className="body--large mt-6">{info}</p>}
                          <Answers data={answers} formDataState={formDataState} handleChange={handleChange} />
                        </React.Fragment>
                      )
                    })}
                  </fieldset>
                )
              })}

             {currentSection !== steps.length - 1 && <div className="flex justify-end mt-10">
                <button type="button" className="button button--green" onClick={() => setCurrentSection(currentSection + 1)}>Next</button>
              </div>}

              {currentSection === steps.length - 1 && <div className="flex lg:justify-center mt-10">
                <Button hasArrow={true} modifier={'!w-[15rem]'} title={'Submit'} type={'submit'} />
              </div>}
            </form>
          </>
        )}
      </div>
    </div>
  )
};
