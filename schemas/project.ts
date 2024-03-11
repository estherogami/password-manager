import {z} from "zod";

//File input validation variables
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

//Form Schema
export const formSchema = z.object({
    title: z.string().min(3, { message: "Tittle must be longer than 3 characters" }).max(50, { message: "Title must be shorter than 50 characters." }),
    url: z.union([z.literal(""), z.string().trim().url()]),
    adImage: z
      .any()
      .refine((files) => {
        return files?.[0]?.size <= MAX_FILE_SIZE;
      }, `Max image size is 5MB.`)
      .refine(
        (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
  
  });

  export type formSchemaType = z.infer<typeof formSchema>