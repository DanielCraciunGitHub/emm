import type { Metadata } from "next"

import "@/styles/globals.css"

import { Inter } from "next/font/google"

import { baseMetadata } from "@/config/meta"
import { Provider } from "@/components/providers"

export const metadata: Metadata = {
  ...baseMetadata,
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Provider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  )
}
