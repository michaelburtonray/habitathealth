import FaqPageModule from "./FaqPageModule";
import Faqs from "./Faqs";
import Hero from "./Hero";
import HeroSlider from "./HeroSlider";
import ImageWithText from "./ImageWithText";
import ImageWithTextGroup from "./ImageWithTextGroup";
import Leadership from "./Leadership";
import LogoWithIcons from "./LogoWithIcons";
import TertiaryPageModule from "./TertiaryPageModule";
import Testimonials from "./Testimonials";
import TextWithBubbles from "./TextWithBubbles";
import TextWithChart from "./TextWithChart";
import TextWithIcons from "./TextWithIcons";
import TextWithList from "./TextWithList";
import TextWithPercentages from "./TextWithPercentages";

export default function Content({ content, title }) {
  const components = content
    ? content.map((c, idx) => {
      const { _type, _id } = c;

      switch (_type) {
        case 'faq':
          return (
            <Faqs key={_id} {...c} />
          );

        case 'faqPageModule':
          return (
            <FaqPageModule key={_id} {...c} />
          );

        case 'hero':
          return (
            <Hero key={_id} {...c} />
          );

        case 'heroSlider':
          return (
            <HeroSlider key={_id} {...c} />
          );

        case 'imageWithText':
          return (
            <ImageWithText key={_id} {...c} isHero={idx === 0} />
          );

        case 'imageWithTextGroup':
          return (
            <ImageWithTextGroup key={_id} {...c} />
          );

        case 'leadership':
          return (
            <Leadership key={_id} {...c} />
          );

        case 'logoWithIcons':
          return (
            <LogoWithIcons key={_id} {...c} />
          );

        case 'tertiaryPageModule':
          return (
            <TertiaryPageModule key={_id} {...c} title={title} />
          );

        case 'testimonials':
          return (
            <Testimonials key={_id} {...c} />
          );

        case 'textWithBubbles':
          return (
            <TextWithBubbles key={_id} {...c} />
          );

        case 'textWithChart':
          return (
            <TextWithChart key={_id} {...c} />
          );

        case 'textWithIcons':
          return (
            <TextWithIcons key={_id} {...c} />
          );

        case 'textWithList':
          return (
            <TextWithList key={_id} {...c} />
          );

        case 'textWithPercentages':
          return (
            <TextWithPercentages key={_id} {...c} />
          );

        default:
          return <h2 key={c._id}>Missing Component: {c._type}</h2>
      }
    })
    : [];

  return (
    <>
      {components.filter(Boolean)}
    </>
  )
}