import type { Metadata } from "next";
import "../styles/globals.scss"

export const metadata: Metadata = {
  title: "Creative Worlds",
  description: "A platform to roleplay with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
