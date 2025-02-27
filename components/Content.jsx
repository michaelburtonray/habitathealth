import Hero from "./Hero";
import TextWithIcons from "./TextWithIcons";

export default function Content({ content }) {
  const components = content
    ? content.map((c) => {
      const { _type, _id } = c;

      switch (_type) {
        case 'hero':
          return (
            <Hero key={_id} {...c} />
          );

          case 'textWithIcons':
            return (
              <TextWithIcons key={_id} {...c} />
            );

        default:
          return <h2>Missing Component</h2>
      }
    })
    : [];

  return (
    <>
      {components.filter(Boolean)}
    </>
  )
}