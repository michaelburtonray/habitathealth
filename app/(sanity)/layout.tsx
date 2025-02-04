export const metadata = {
  title: 'Sanity Studio | Habitat Health',
  description: 'Custom Sanity Studio for Habitat Health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
