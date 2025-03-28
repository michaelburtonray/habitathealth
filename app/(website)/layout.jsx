import Header from "@/components/Header";

import "../../styles/globals.css";
import { gellix } from "@/styles/font";
import Footer from "@/components/Footer";
import { getSettingsData } from "@/sanity/lib/fetch";

export const metadata ={
  title: "Habitat Health",
  description: "lorem ipsum",
};

// export async function generateMetadata() {
//   const settings = await getSettingsData();

//   const title = settings?.title || demo.title;
//   const defaultTitle = settings?.defaultTitle || demo.defaultTitle;
//   const description = settings?.description || demo.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);

//   return {
//     metadataBase: new URL("https://www.habitathealth.com/"),
//     title: {
//       template: `%s | ${title}`,
//       default: defaultTitle,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//     alternates: {
//       canonical: "./",
//     }
//   };
// }


export default async function RootLayout({
  children,
}) {
  const settingsData = await getSettingsData();
  const { header, footer } = settingsData;
  return (
    <html lang="en">
      <body
        className={`${gellix.variable} antialiased max-w-[100vw]  px-[--padding] max-lg:pb-20 pb-[--padding]`}
      >
        {header && <Header { ...header } />}
        {children}
        {footer && <Footer { ...footer } />}
      </body>
    </html>
  );
}
