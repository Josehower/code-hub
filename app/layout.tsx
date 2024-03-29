import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" bg-black bg-[url('/images/k90-pic.png')] bg-fixed bg-top bg-no-repeat md:bg-cover">
        {children}
      </body>
    </html>
  )
}
