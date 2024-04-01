"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { credentialSchema } from "@/schemas/credential"
import { createCredential } from "@/api/credentials_db"
import useBuilder from "../hooks/useBuilder"


function NewCredentialForm({ pid }: { pid: number }) {

  // 1. Define form.
  const form = useForm<z.infer<typeof credentialSchema>>({
    resolver: zodResolver(credentialSchema),
    defaultValues: {
      title: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof credentialSchema>) {
   const credentialId = await createCredential(values.title, pid)
    // return console.log(credentialId)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="grow">
                <FormControl>
                  <Input placeholder="Type title here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary">Add new </Button>
        </form>
      </Form>
    </div>
  )
}

export default NewCredentialForm
