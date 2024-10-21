import Header from "@/components/header"
import Section from "@/components/section"

export default function Home() {
  return (
   <>
    <Header>
      &quot;...endowed by their{" "}
      <strong className="text-amber-400">Creator</strong>{" "}
      with certain unalienable Rights...&quot;
    </Header>
    <Section>
      <video width="720" height="480" controls className="rounded-md">
        <source src="https://thomasjeffersonrecites.s3.amazonaws.com/Thomas_Jefferson_Recites.mp4" type="video/mp4" />
      </video>
    </Section>
   </>
  )
 }