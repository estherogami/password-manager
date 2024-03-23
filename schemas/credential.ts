import {z} from "zod";

//Credential form schema
export const credentialSchema = z.object({
    title: z.string(),
  })

//Credential form type
  export type credentialSchemaType = z.infer<typeof credentialSchema>