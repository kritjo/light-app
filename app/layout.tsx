import { Inter } from "next/font/google";
import type { ReactElement } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout(props: {
  readonly children: Readonly<ReactElement>;
}): ReactElement {
  return (
    <html lang="en">
      <body>
        <main className={`${inter.variable} font-sans`}>{props.children}</main>
      </body>
    </html>
  );
}
