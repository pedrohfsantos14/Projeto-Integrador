import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Google_Sans_Code,
  Merriweather,
  Merriweather_Sans,
} from "next/font/google";
import { RootProvider } from "./provider";

const fontSans = Merriweather_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontMono = Google_Sans_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PI",
  description: "Projeto Integrador",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
