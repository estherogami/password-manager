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
  import { credentialTitleSchema } from "@/schemas/project"
  
//   const credentialTitleSchema = z.object({
//     title: z.string().min(2, {
//       message: "Credential title must be at least 2 characters.",
//     }),
//   })

function NewCredentialForm() {
     // 1. Define form.
     const form = useForm<z.infer<typeof credentialTitleSchema>>({
        resolver: zodResolver(credentialTitleSchema),
        defaultValues: {
          title: "",
        },
      })

      async function onSubmit(values: z.infer<typeof credentialTitleSchema>){
        return console.log("test")
      }

  return (
    <div>
       <Form {...form}>
       <form 
       onSubmit={form.handleSubmit(onSubmit)} 
       onBlur={form.handleSubmit(onSubmit)} 
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
        <Button type="submit">Add new</Button>
        </form>
    </Form>
    </div>
  )
}

export default NewCredentialForm
