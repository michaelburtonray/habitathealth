import { defineQuery } from "next-sanity";
import { defaultLang } from "@/i18n-config";

const buttonData = /* groq */`{
  ...,
  'title': coalesce(
    title[_key == $lang][0].value,
    title[_key == "${defaultLang}"][0].value,
    title,
    "Missing translation",
  ),
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

const heroData = /* groq */`{
  ...,
  button ${buttonData},
  'copy': coalesce(
    copy[_key == $lang][0].value,
    copy[_key == "${defaultLang}"][0].value,
    copy,
    "Missing translation",
  ),
  image ${imageData},
  mobileImage ${imageData},
  'title': coalesce(
    title[_key == $lang][0].value,
    title[_key == "${defaultLang}"][0].value,
    title,
    "Missing translation",
  ),
}`;

const contentData = /* groq */`{
  ...,
  _type == 'hero' => ${heroData},
}`;

export const pageQuery = defineQuery(`
  *[_type == "page" && $slug in slug[].value.current][0] {
    ...,
    content[]->${contentData},
  }
`);

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]
`);