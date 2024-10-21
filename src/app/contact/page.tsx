"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "@/components/header"
import Section from "@/components/section"

const formSchema = z.object({
 name: z.string().min(1, "Required"),
 email: z.string().min(1, "Required"),
 message: z.string().min(1, "Required")
})

export default function Contact() {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: "",
   email: "",
   message: ""
  }
 })

 return (
  <>
   <Header>Contact</Header>
   <Section>
    <Image
     src="/images/headshot-2.webp"
     alt="Craig Claybrook as Thomas Jefferson"
     width={300}
     height={100}
     className="mx-auto rounded-md my-16"
    />
    <Form {...form}>
     <form
      action="https://public.herotofu.com/v1/7cad6320-26c7-11ef-b435-b1ba21672864"
      method="POST"
      acceptCharset="UTF-8"
      className="space-y-4 max-w-md mx-auto"
     >
      <FormField
       control={form.control}
       name="name"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Name</FormLabel>
         <FormControl>
          <Input placeholder="Name" {...field} />
         </FormControl>
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="email"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Email</FormLabel>
         <FormControl>
          <Input placeholder="Email" {...field} />
         </FormControl>
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="message"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Message</FormLabel>
         <FormControl>
          <Textarea placeholder="Message" {...field} />
         </FormControl>
        </FormItem>
       )}
      />
      <Button type="submit">Submit</Button>
     </form>
    </Form>
   </Section>
  </>
 )
}