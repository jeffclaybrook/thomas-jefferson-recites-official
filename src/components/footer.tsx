"use client"

import Link from "next/link"
import Image from "next/image"
import { navbarItems } from "./nav/navbar"

export default function Footer() {
 return (
  <footer className="footer footer-center p-10 bg-gray-950 text-base-content rounded">
   <Link href={"/"}>
    <Image
     src="/images/logo.png"
     alt="Thomas Jefferson Recites"
     width={150}
     height={150}
    />
   </Link>
   <ul className="grid grid-flow-col gap-4">
    {navbarItems.links.map((link, i) => (
     <li key={i}>
      <Link
       href={link.href}
       className="link link-hover text-white"
      >
       {link.label}
      </Link>
     </li>
    ))}
   </ul>
   <p className="text-slate-200">Copyright &copy; 2024 - Jeffrey Claybrook</p>
  </footer>
 )
}