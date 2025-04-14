"use client"

import React, { useActionState, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";

import { sendEmail } from "@/app/actions";

import Answers from "@/components/Answers";
import Button from "@/components/Button";
import IconPhone from "@/components/IconPhone";
import IconEmail from "@/components/IconEmail";

export default function CheckEligibility(props) {
  const {
    copy,
    cta,
    disclaimer,
    emailFrom,
    emailTo,
    intro,
    sections,
    successCopy,
    title,
    zipCodes,
  } = props;

  const [currentSection, setCurrentSection] = useState(-1);
  const [failureMessage, setFailureMessage] = useState('');
  const [formDataState, setFormDataState] = useState({});
  const [hasFailed, setHasFailed] = useState(false);
  const [steps, setSteps] = useState(
    sections.filter(({ questions }) => questions && questions.length > 0)
  );

  const initialState = {
    hasSent: false,
    message: '',
  }

  // const [actionState, formAction, isPending] = useActionState

  const handleChange = useCallback((e) => {
    const { name, type, value } = e.target;
    const prevFormDataState = formDataState;

    setFormDataState({ ...prevFormDataState, [name]: value });

    if (type === 'radio') {
      if (value == 'No') return setHasFailed(true);

      setCurrentSection(currentSection + 1);
    }
  }, [currentSection, formDataState, setFormDataState]);

  const submitSection = (e) => {
    e.preventDefault();

    if (currentSection < steps.length - 1) {
      const zip = formDataState['zipCode'];

      if (zip) {
        const isValidZip = zipCodes.includes(zip);

        if (!isValidZip) {
          return setHasFailed(true);
        }
      }

      return setCurrentSection(currentSection + 1);
    }

    window.scrollTo(0, 0);
    setCurrentSection(currentSection + 1);
  }

  const handleIntroSubmit = (e) => {
    e.preventDefault();
    setCurrentSection(0);
  };

  const submitForm = async () => {
    const { message } = initialState;
    const formData = { ...formDataState, message };
    const res = await sendEmail(initialState, formData, { emailFrom, emailTo });

    window.scrollTo(0, 0);

    if (res.hasSent) {
      setCurrentSection(currentSection + 1);
    } else {
      setHasFailed(true);
      setFailureMessage(res.message);
    }

  }

  const [actionState, formAction, isPending] = useActionState(submitForm, initialState)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection, hasFailed]);

  useEffect(() => {
    const buttons = document.querySelectorAll('header .js-ce-button');
    const hardRefresh = () => {
      window.location.reload();
    }

    buttons.forEach((button) => {
      button.addEventListener('click', hardRefresh);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', hardRefresh);
      });
    }
  }, [])

  const components = {
    block: {
      normal: ({ children, markDefs }) => {
        const { props } = children[0];
        let icon = '';

        if (props) {
          const { markType, value } = props;

          if (markType === 'link') {
            if (value.href.includes('tel')) {
              icon = <IconPhone />
            } else if (value.href.includes('mailto')) {
              icon = <IconEmail />
            }
          }

          return <p className="button button--green button--slim flex gap-2 items-center !px-4 text-white">{icon}{children}</p>
        }

        return <p>{children}</p>
      }
    }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    transition: { duration: 0.8 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    }
  }

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  }

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-[8rem] px-5 lg:px-10 py-10 lg:p-20">
      <div className="">
        <motion.div
          className="flex flex-col gap-6 lg:gap-10 max-w-[36rem] lg:sticky lg:top-[calc(var(--header-height)+4.825rem)]"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 className="title" variants={itemVariants}>{title}</motion.h1>
          {currentSection === -1 && (
            <>
              <motion.p className="eyebrow !max-w-[30rem]" variants={itemVariants}>{intro}</motion.p>
              <motion.form className="bg-cream" variants={itemVariants} onSubmit={handleIntroSubmit}>
                {cta && <Button {...cta} type={'submit'} />}
              </motion.form>
            </>
          )}

          {currentSection > -1 && (
            <motion.p className="eyebrow !max-w-[30rem]">{copy}</motion.p>
          )}
        </motion.div>
      </div>

      <div className={`bg-white max-lg:mt-10 px-5 lg:px-10 py-10 lg:py-14 rounded-2xl`}>
        {currentSection === -1 && (
          <motion.div
            className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-14"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            {sections.map(({ _key, copy, image, subtitle }) => (
              <motion.div
                key={_key}
                className="flex flex-col gap-6"
                variants={itemVariants}
              >
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
              </motion.div>
            ))}

            {disclaimer && (
              <motion.div className="disclaimer col-span-full border-t border-green/40 pt-10" variants={itemVariants}>
                <p className="body--small">{disclaimer}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {currentSection > -1 && (
          <div className="flex flex-col gap-10">
            <div className={`form-nav flex gap-4 justify-between w-full ${hasFailed || currentSection === steps.length && 'pointer-events-none'}`}>
              {steps?.map(({ _key, title }, idx) => {
                const isActive = idx === currentSection;
                const isCompleted = idx < currentSection;
                const colors = isCompleted ? 'bg-cream border-cream' : '';
                return (
                  <React.Fragment key={_key}>
                    {idx !== 0 && <div className="flex max-lg:hidden items-center w-full">
                      <span className="bg-green/40 w-full h-[0.125rem]" />
                    </div>}
                    <button
                      key={_key}
                      onClick={() => setCurrentSection(idx)}
                      className={`body--large flex gap-3 items-center ${!isActive && 'max-lg:hidden'} ${(!isCompleted || hasFailed) && 'pointer-events-none'}`}
                    >
                      <span className={`box-border border border-green inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isActive? 'bg-green text-white' : colors} `}>
                        {isCompleted ? (
                          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5031 2L7.50293 14.0002L1.49609 7.99331" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        ) : idx + 1}
                      </span>
                      {title}
                    </button>
                  </React.Fragment>
                )
              })}
            </div>

            {steps?.map(({ _key, failureCopy, intro, questions }, idx) => {
              return idx === currentSection && (
                <form key={_key} {...(currentSection === steps.length - 1 ? { action: formAction } : { onSubmit: submitSection })}>
                  {hasFailed
                    ? (
                      <div className={`rte bg-orange p-5 rounded-2xl`}>
                        <PortableText value={failureCopy} components={components} />
                        {failureMessage !== '' && <p>{failureMessage}</p>}
                      </div>
                    )
                    : (
                      <motion.fieldset
                        className="lg:mt-10"
                        variants={containerVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.25 }}
                      >
                        {intro && <div className="rte rte--enroll body--large">
                          <PortableText value={intro} components={components} />
                        </div>}
                        {questions.map(({ _key, _type, answers, info, question }, idx) => {
                          return (
                            <React.Fragment key={_key}>
                              {question && questions.length === 1 && <h3>{question}</h3>}
                              {info && <p className="body--large mt-6">{info}</p>}
                              <Answers data={answers} formDataState={formDataState} handleChange={handleChange} index={idx} />
                            </React.Fragment>
                          )
                        })}
                      </motion.fieldset>
                    )
                  }

                  <div className="flex gap-6 justify-between mt-10">
                    {currentSection >= 0 && currentSection !== steps.length && !hasFailed && <button type="button" name="back" className="button button--green" onClick={() => setCurrentSection(currentSection - 1)}>Back</button>}

                    {currentSection <= steps.length - 2 && !hasFailed && <button type="submit" name="next" className="button button--green">Next</button>}
                  </div>

                  {currentSection === steps.length - 1 && !hasFailed && <div className="flex lg:justify-center mt-10">
                    <Button
                      hasArrow={true}
                      modifier={`!w-[15rem] ${isPending ? 'pointer-events-none' : ''}`}
                      title={isPending ? 'Submitting…' : 'Submit'}
                      type="submit"
                    />
                  </div>}
                </form>
              )
            })}

            {currentSection === steps.length && (
              <div className={`rte bg-sky-blue p-5 rounded-2xl`}>
                <PortableText value={successCopy} components={components} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
};
