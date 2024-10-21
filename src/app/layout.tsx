import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Navbar from "@/components/nav/navbar"
import "./globals.css"

const roboto = Roboto_Slab({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thomas Jefferson Recites",
  description: "Craig Claybrook presents the Declaration of Independence as Thomas Jefferson"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${roboto.className} antialiased`)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}