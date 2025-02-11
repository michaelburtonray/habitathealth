import localFont from "next/font/local";

export const gellix = localFont({
  src: [
    {
      path: '../public/Gellix-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Gellix-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/Gellix-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Gellix-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-gellix',
})