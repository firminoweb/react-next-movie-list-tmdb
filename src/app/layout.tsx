import Header from "@/components/Header";
import "./globals.scss";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${roboto.variable}`}>
      <head>
        <title>Pilar Movies</title>
        <link href="/favicon-black.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
