import { defineQuery } from "next-sanity";
import { defaultLang } from "@/i18n-config";

const copyCoalesce = /* groq */`coalesce(
  copy[_key == $lang][0].value,
  copy[_key == "${defaultLang}"][0].value,
  copy,
  "Missing translation",
)`;

const textCoalesce = /* groq */`coalesce(
  text[_key == $lang][0].value,
  text[_key == "${defaultLang}"][0].value,
  text,
  "Missing translation",
)`;

const titleCoalesce = /* groq */`coalesce(
  title[_key == $lang][0].value,
  title[_key == "${defaultLang}"][0].value,
  title,
  "Missing translation",
)`;

const buttonData = /* groq */`{
  ...,
  'title': ${titleCoalesce},
}`;

const imageData = /* groq */`{
  ...,
  'alt': coalesce(
    alt[_key == $lang][0].value,
    alt[_key == "${defaultLang}"][0].value,
    alt,
    "Missing translation",
  ),
  'assetPath': asset->path,
  'aspectRatio': asset->metadata.dimensions.aspectRatio,
}`;

const linkObjectData = /* groq */`{
  ...,
  internalLink->{
    'slug': slug.current,
    title,
  },
}`;

const faqData = /* groq */`{
  ...,
  button ${buttonData},
}`;

const heroData = /* groq */`{
  ...,
  button ${buttonData},
  'copy': ${copyCoalesce},
  image ${imageData},
  mobileImage ${imageData},
  'title': ${titleCoalesce},
}`;

const heroSliderData = /* groq */`{
  ...,
  slides[] ${imageData},
}`;

const imageWithTextData = /* groq */`{
  ...,
  button ${buttonData},
  'copy': ${copyCoalesce},
  'isImageOnLeft': isImageOnLeft,
  image ${imageData},
  'text': ${textCoalesce},
  'title': ${titleCoalesce},
}`;

const imageWithTextGroupData = /* groq */`{
  ...,
  content[]-> ${imageWithTextData},
  'text': ${textCoalesce},
  'title': ${titleCoalesce},
}`;

const leadershipData = /* groq */`{
  ...,
  leaders[] {
    ...,
    image ${imageData},
  },
}`;

const logoWithIconsData = /* groq */`{
  ...,
  icons[] ${imageData},
}`;

const testimonialData = /* groq */`{
  ...,
  image ${imageData},
  'title': ${titleCoalesce},
  'text': ${textCoalesce},
}`;

const testimonialsData = /* groq */`{
  ...,
  testimonials[] ${testimonialData},
  'text': ${textCoalesce},
  'title': ${titleCoalesce},
}`;

const textWithChartData = /* groq */`{
  ...,
  button ${buttonData},
}`;

const textWithIconsData = /* groq */`{
  ...,
  button ${buttonData},
  'copy': ${copyCoalesce},
  icons[] ${imageData},
  'text': ${textCoalesce},
  'title': ${titleCoalesce},
}`

const textWithListData = /* groq */`{
  ...,
  button ${buttonData},
}`;

const textWithPercentagesData = /* groq */`{
  ...,
  button ${buttonData},
}`;

const contentData = /* groq */`{
  ...,
  _type == 'faq' => ${faqData},
  _type == 'hero' => ${heroData},
  _type == 'heroSlider' => ${heroSliderData},
  _type == 'imageWithText' => ${imageWithTextData},
  _type == 'imageWithTextGroup' => ${imageWithTextGroupData},
  _type == 'leadership' => ${leadershipData},
  _type == 'logoWithIcons' => ${logoWithIconsData},
  _type == 'testimonials' => ${testimonialsData},
  _type == 'textWithChart' => ${textWithChartData},
  _type == 'textWithIcons' => ${textWithIconsData},
  _type == 'textWithList' => ${textWithListData},
  _type == 'textWithPercentages' => ${textWithPercentagesData},
}`;

export const enrollmentQuery = defineQuery(`
  *[_type == "enrollment" && slug.current == $slug][0] {
    ...,
    cta ${buttonData},
    sections[] {
      ...,
      image ${imageData},
    }
  }`)

export const pageQuery = defineQuery(`
  *[_type == "page" && $slug == slug.current][0] {
    ...,
    content[]->${contentData},
  }
`);

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0] {
    ...,
    footer {
      ...,
      contactInfo,
      linkLists[] {
        ...,
        links[] ${linkObjectData},
      },
      regulatoryLinks[] ${linkObjectData},
      socialLinks[] ${linkObjectData},
    },
    header {
      ...,
      contactList[] ${linkObjectData},
      image {
        ...,
        'assetPath': asset->path,
        'aspectRatio': asset->metadata.dimensions.aspectRatio,
      },
      nav[] ${linkObjectData},
    }
  }
`);