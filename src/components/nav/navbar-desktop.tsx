"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NavbarButton } from "./navbar-button"
import { NavbarItems } from "@/types"
import { cn } from "@/lib/utils"

type NavbarDesktopProps = {
 navbarItems: NavbarItems
}

export default function NavbarDesktop(props: NavbarDesktopProps) {
 const pathname = usePathname()

 return (
  <nav className="flex items-center justify-between absolute w-full z-10">
   <div className="flex-1 p-2 mx-2">
    <Link href={"/"}>
     <Image
      src="/images/logo.png"
      alt="Thomas Jefferson Recites"
      width={80}
      height={80}
     />
    </Link>
   </div>
   <div className="flex-none hidden lg:block">
    <ul className="menu menu-horizontal">
     {props.navbarItems.links.map((link, i) => (
      <li key={i}>
       <Link href={link.href}>
        <NavbarButton
         className={cn(
          "px-1 text-lg text-slate-50 hover:text-amber-400 rounded-none bg-transparent focus:bg-transparent hover:bg-transparent active:bg-transparent",
          pathname === link.href && "border-b border-amber-400 text-amber-400"
         )}
        >
         {link.label}
        </NavbarButton>
       </Link>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 )
}