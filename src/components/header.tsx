import { ReactNode } from "react"

type HeaderProps = {
 children: ReactNode
}

export default function Header({ children }: HeaderProps) {
 return (
  <header className="hero min-h-screen bg-right" style={{ backgroundImage: "url(/images/hero.webp)" }}>
   <div className="hero-overlay bg-opacity-60" />
   <div className="p-4 max-w-2xl text-neutral-content">
    <h1 className="text-4xl">{children}</h1>
   </div>
  </header>
 )
}