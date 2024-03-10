"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

//File input validation variables
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];


const formSchema = z.object({
  title: z.string().min(3, { message: "Tittle must be longer than 3 characters" }).max(50, { message: "Title must be shorter than 50 characters." }),
  url: z.string().optional(),
  picture: z.any()
    .optional()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
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
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
    console.log(values)
  }


  return (
    <div className="flex flex-wrap flex-row h-full max-h-100 justify-center content-center bg-[url('/images/graph-paper.svg')] bg-opacity-25">
      <div>
        <Card className="w-[400px] max-w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CardHeader>
                <CardTitle className="flex gap-2"><MdOutlineCreateNewFolder /> Create new project</CardTitle>
                <CardDescription>To keep your credentials</CardDescription>
              </CardHeader>

              <CardContent>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mb-5 flex flex-col gap-3">
                        <FormLabel>Title</FormLabel>
                        <FormControl >
                          <Input placeholder="Project title" {...field} />
                        </FormControl>
                      </div>
                    </FormItem>
                  )} />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mb-5 flex flex-col gap-3">
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                          <Input placeholder="http://www.url.com" {...field} />
                        </FormControl>
                      </div>
                    </FormItem>
                  )} />
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mb-5 flex flex-col gap-3">
                        <FormLabel>Picture</FormLabel>
                        <FormControl>
                          <Input id="picture" type="file" placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This picture will be shown as the thumbnail. <br />The picture must be 1:1 and at leas 50x50px.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )} />
                <FormMessage />

              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/" className=" items-center flex gap-1 text-slate"><GoArrowLeft /> Go back</Link>
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
