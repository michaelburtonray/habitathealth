import Hero from "./Hero";

export default function Content({ content }) {
  const components = content
    ? content.map((c) => {
      const { _type, _id } = c;

      switch (_type) {
        case 'hero':
          return (
            <Hero key={_id} {...c} />
          );
      }
    })
    : [];

  return (
    <>
      {components.filter(Boolean)}
    </>
  )
}