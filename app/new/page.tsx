"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { projectSchema } from "@/schemas/project"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import { BsImage } from "react-icons/bs";




function NewProjectPage() {
  // 1. Define form.
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      url: "",
      adImage: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof projectSchema>) {

    //Convert to json and send to db
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    console.log(values.adImage[0].name)
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
                    <FormItem className="mb-5">
                      <div className=" flex flex-col gap-3">
                        <FormLabel>Title</FormLabel>
                        <FormControl >
                          <Input placeholder="Project title" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />

                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <div className="flex flex-col gap-3">
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                          <Input placeholder="http://www.url.com" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />


                <FormField
                  control={form.control}
                  name="adImage"
                  render={({ field }) => (
                    <FormItem>
                      {/* Preview image */}
                      {/* {selectedImage ? (
                            <div className="md:max-w-[200px]">
                              <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Selected"
                              />
                            </div>
                          ) : ( */}
                      <div className="inline-flex items-center justify-between">
                        <div className="p-3 bg-slate-200  justify-center items-center flex">
                          <BsImage size={56} />
                        </div>
                        {/* )} */}
                      </div>
                      <FormControl>
                        <Button size="lg" type="button">
                          <input
                            type="file"
                            className="hidden"
                            id="fileInput"
                            onBlur={field.onBlur}
                            name={field.name}
                            onChange={(e) => {
                              field.onChange(e.target.files);
                            }}
                            ref={field.ref}
                          />
                          <label
                            htmlFor="fileInput"
                            className="bg-blue-500 hover:bg-blue-600 text-neutral-90  rounded-md cursor-pointer inline-flex items-center"
                          >

                            <span className="whitespace-nowrap">
                              choose your image
                            </span>
                          </label>
                        </Button>
                      </FormControl>
                      <FormMessage />

                    </FormItem>
                  )}
                />
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
