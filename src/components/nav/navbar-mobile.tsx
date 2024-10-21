"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { NavbarItems } from "@/types"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavbarButtonSheet as NavbarButton } from "./navbar-button"

type NavbarMobileProps = {
 navbarItems: NavbarItems
}

export default function NavbarMobile(props: NavbarMobileProps) {
 const pathname = usePathname()

 return (
  <Sheet>
   <Link href={"/"} className="absolute top-5 left-3">
    <Image
     src="/images/logo.png"
     alt="Thomas Jefferson Recites"
     width={80}
     height={80}
    />
   </Link>
   <SheetTrigger asChild>
    <Button
     variant="ghost"
     size="icon"
     className="absolute top-5 right-3 text-slate-50"
    >
     <Menu className="!h-6 !w-6" />
    </Button>
   </SheetTrigger>
   <SheetContent side="left" className="px-3 py-4">
    <div className="h-full flex flex-col">
     <div className="flex flex-col w-full gap-1 mt-5">
      {props.navbarItems.links.map((link, i) => (
       <Link key={i} href={link.href}>
        <NavbarButton
         variant={pathname === link.href ? "secondary" : "ghost"}
         className="w-full"
        >
         {link.label}
        </NavbarButton>
       </Link>
      ))}
     </div>
    </div>
   </SheetContent>
  </Sheet>
 )
}