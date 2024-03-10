"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const formSchema = z.object({
  title: z.string().max(50, { message: "Title must be shorter than 50 characters." }),
  picture: z.string().optional(),
  url: z.string().url().optional()
});

function NewProjectPage() {
  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      picture: "",
      url: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div className="flex flex-wrap flex-row h-full max-h-100 justify-center content-center bg-[url('/images/graph-paper.svg')] bg-opacity-25">
      <div className="">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardHeader>
              <CardTitle>Create new project</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Project title" {...field} />
                    </FormControl>
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="http://url.com" {...field} />
                    </FormControl>
                    <FormLabel>Picture</FormLabel>
                    <FormControl>
                      <Input id="picture" type="file" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This picture will be shown as the thumbnail. <br />The picture must be 1:1 and at leas 50x50px.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Add new</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      </div>
    </div>
  )
}

export default NewProjectPage
