"use client"

import { useMediaQuery } from "usehooks-ts"
import { NavbarItems } from "@/types"
import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"

export const navbarItems: NavbarItems = {
 links: [
  { label: "Home", href: "/" },
  { label: "Mission", href: "/mission" },
  { label: "Plan", href: "/plan" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
 ]
}

export default function Navbar() {
 const isDesktop = useMediaQuery("(min-width: 1024px)", {
  initializeWithValue: false
 })

 if (isDesktop) {
  return <NavbarDesktop navbarItems={navbarItems} />
 }

 return <NavbarMobile navbarItems={navbarItems} />
}