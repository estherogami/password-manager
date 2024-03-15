"use server"
import { projectSchema, projectSchemaType } from "@/schemas/project";
import prisma from "@/lib/prisma";

//Create Project
export async function CreateProject(data: projectSchemaType) {
    
    const validation = projectSchema.safeParse(data);
    if(!validation.success) throw new Error("Form not valid");
    
    const {title, url, adImage} = data;
    console.log("test");
    const project = await prisma.project.create({
        data: {
            title,
            URI: url,
            icon: adImage
        }
    })
    if(!project) throw new Error("something went wrong")

    return project.id
}

//Get Project List
export async function GetProjects() {
    
}

//Get Project By Id
export async function GetProjectById() {

}

//UpdateProject
export async function UpdateProject() {

}

//DeleteProject
export async function DeleteProject() {

}

//https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
    //ref for later