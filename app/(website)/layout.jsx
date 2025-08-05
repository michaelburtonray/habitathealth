import Header from "@/components/Header";

import "../../styles/globals.css";
import { gellix } from "@/styles/font";
import Footer from "@/components/Footer";
import { getSettingsData } from "@/sanity/lib/fetch";

import { GoogleAnalytics } from '@next/third-parties/google'


export async function generateMetadata() {
  const data = await getSettingsData()
  const { metadata } = data
  const { title } = metadata

  metadata.title = {
    template: `%s | ${title}`,
    default: title,
  }

  metadata.metadataBase = new URL('https://www.habitathealth.com/')

  return metadata
}

export default async function RootLayout({
  children,
}) {
  const settingsData = await getSettingsData();
  const { header, footer } = settingsData;

  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XYZ';

  return (
    <html lang="en">
      <body
        className={`${gellix.variable} antialiased max-w-[100vw]  px-[--padding] max-lg:pb-20 pb-[--padding]`}
      >
        {header && <Header { ...header } />}
        {children}
        {footer && <Footer { ...footer } />}
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
