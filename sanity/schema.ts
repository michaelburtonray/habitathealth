import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'

import settings from './schemas/singletons/settings'

import enrollment from './schemas/documents/enrollment'
import faq from './schemas/documents/faq'
import hero from './schemas/documents/hero'
import heroSlider from './schemas/documents/heroSlider'
import imageWithText from './schemas/documents/imageWithText'
import imageWithTextGroup from './schemas/documents/imageWithTextGroup'
import leadership from './schemas/documents/leadership'
import logoWithIcons from './schemas/documents/logoWithIcons'
import page from './schemas/documents/page'
import testimonials from './schemas/documents/testimonials'
import textWithBubbles from './schemas/documents/textWithBubbles'
import textWithChart from './schemas/documents/textWithChart'
import textWithIcons from './schemas/documents/textWithIcons'
import textWithList from './schemas/documents/textWithList'
import textWithPercentages from './schemas/documents/textWithPercentages'

import answerRadioButtons from './schemas/objects/answerRadioButtons'
import answerSelectDropdown from './schemas/objects/answerSelectDropdown'
import answerText from './schemas/objects/answerText'
import answerTextArea from './schemas/objects/answerTextarea'
import button from './schemas/objects/button'
import enrollmentSection from './schemas/objects/enrollmentSection'
import faqQA from './schemas/objects/faqQA'
import footer from './schemas/objects/footer'
import formField from './schemas/objects/formField'
import header from './schemas/objects/header'
import linkList from './schemas/objects/linkList'
import linkObject from './schemas/objects/linkObject'
import testimonial from './schemas/objects/testimonial'

const singletons = [
  settings,
]

const documents = [
  ...singletons,
  enrollment,
  faq,
  hero,
  heroSlider,
  imageWithText,
  imageWithTextGroup,
  leadership,
  logoWithIcons,
  page,
  testimonials,
  textWithBubbles,
  textWithChart,
  textWithIcons,
  textWithList,
  textWithPercentages,
];

const objects = [
  answerRadioButtons,
  answerSelectDropdown,
  answerText,
  answerTextArea,
  button,
  enrollmentSection,
  faqQA,
  footer,
  formField,
  header,
  linkList,
  linkObject,
  testimonial
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...documents,
    ...objects,
    post,
    author,
    category,
    blockContent
  ],
}
