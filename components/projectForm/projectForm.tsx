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

import { CreateProject } from "@/api/project_db"
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast"

    
function ProjectForm() {
    const router = useRouter();
    // 1. Define form.
    const form = useForm<z.infer<typeof projectSchema>>({
      resolver: zodResolver(projectSchema),
      defaultValues: {
        title: "",
        url: "",
        // adImage: ""
      },
    })
  
    //Submit handler.
    async function onSubmit(values: z.infer<typeof projectSchema>) {
      try {
          const projectId = await CreateProject(values);
          router.push(`/${projectId}`)
      } catch (error) {
        console.log(error)
        toast({
          title: "Error",
          description: "Something went wrong, please try again later",
          variant: "destructive"
        });
      }
      // console.log(values.adImage[0].name)
    }

    
  return (
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

{/* 
          <FormField
            control={form.control}
            name="adImage"
            render={({ field }) => (
              <FormItem>
                 Preview image 
                {selectedImage ? (
                      <div className="md:max-w-[200px]">
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Selected"
                        />
                      </div>
                    ) : ( 
                <div className="inline-flex items-center justify-between">
                  <div className="p-3 bg-slate-200  justify-center items-center flex">
                    <BsImage size={56} />
                  </div>
                  {/* )} 
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
          /> */}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className=" items-center flex gap-1 text-slate"><GoArrowLeft /> Go back</Link>
          <Button type="submit">Add new</Button>
        </CardFooter>
      </form>
    </Form>
  </Card>
  )
}

export default ProjectForm
