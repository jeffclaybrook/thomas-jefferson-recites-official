"use client"

import Image from "next/image"
import Header from "@/components/header"
import Section from "@/components/section"

export default function Plan() {
 return (
  <>
   <Header>Plan</Header>
   <Section>
    <Image
     src="/images/headshot.webp"
     alt="Craig Claybrook as Thomas Jefferson"
     width={300}
     height={100}
     className="mx-auto rounded-md my-16"
    />
    <h2 className="text-2xl font-semibold mb-2">The Plan</h2>
    <h3 className="mb-2">Launching the Declaration onto the National Stage. Every worthwhile undertaking needs a start-up plan.</h3>
    <video width="720" height="480" controls className="rounded-md mb-8">
     <source src="https://thomasjeffersonrecites.s3.amazonaws.com/Thomas_Jefferson_Recites_Climactic_Ending.mp4" type="video/mp4" />
    </video>
    <div className="flex items-center justify-center mb-4">
     <button
      type="button"
      onClick={() => navigator.clipboard.writeText("https://thomasjeffersonrecites.s3.amazonaws.com/Thomas_Jefferson_Recites_Climactic_Ending.mp4")}
      className="btn btn-primary"
     >
      Click to Copy Video
     </button>
    </div>
    <h4 className="leading-8 font-bold">Stage One:</h4>
    <p className="mb-4 leading-8">
     His motivation is to glorify God by launching the Declaration onto the national stage. (The Declaration contains four references to God.)
    </p>
    <h4 className="leading-8 font-bold">Stage Two:</h4>
    <p className="mb-4 leading-8">
     His plan is to help people do just that, by offering them a short video that would direct them to this website so, that they can share this with three or more friends.
    </p>
    <h4 className="leading-8 font-bold">Final Comments:</h4>
    <p className="mb-4 leading-8">
     He recommends the book 
     <a href="https://www.amazon.com/Never-Before-History-Americas-Inspired/dp/0964210428" target="_blank" rel="noreferrer">
     <em>Never Before in History--America&apos;s Inspired Birth,</em></a> 
     published by the Discovery Institute, Seattle, WA.
    </p>
    <p className="mb-4 leading-8">
     For those who wish to memorize all or part of the Declaration, he will be adding a brief summary of &quot;how to memorize&quot; to this website.
    </p>
    <p className="mb-4 leading-8">
     This brief video above presents the climactic conclusion of the Declaration. Mr Claybrook hopes that people will find this website worthy of passing along. At age 77, he is more interested in people watching him via video than &quot;in person&quot; He may be reached at <a href="mailto:craigclaybrook@gmail.com" target="_blank" rel="noreferrer">craigclaybrook@gmail.com</a>.</p>
   </Section>
  </>
 )
}