import {ReactNode} from "react";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${inter.variable} font-sans`}>
          {children}
        </main>
      </body>
    </html>
  )
}