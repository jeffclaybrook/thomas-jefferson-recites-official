import { ReactNode } from "react"

type SectionProps = {
 children: ReactNode
}

export default function Section({ children }: SectionProps) {
 return (
  <section className="max-w-3xl mx-auto my-16 px-4">{children}</section>
 )
}