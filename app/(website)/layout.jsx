import Header from "@/components/Header";

import "../../styles/globals.css";
import { gellix } from "@/styles/font";
import Footer from "@/components/Footer";
import { getSettingsData } from "@/sanity/lib/fetch";
import { SettingsQueryResult } from "@/sanity.types";

export const metadata ={
  title: "Habitat Health",
  description: "lorem ipsum",
};

export default async function RootLayout({
  children,
}) {
  const settingsData = await getSettingsData();
  const { header, footer } = settingsData;
  return (
    <html lang="en">
      <body
        className={`${gellix.variable} antialiased px-[--padding] max-lg:pb-20 pb-[--padding]`}
      >
        {header && <Header { ...header } />}
        {children}
        {footer && <Footer { ...footer } />}
      </body>
    </html>
  );
}
