"use server"
import { projectSchema, projectSchemaType } from "@/schemas/project";
import prisma from "@/lib/prisma";

//Create Project
export async function CreateProject(data: projectSchemaType) {
    
    const validation = projectSchema.safeParse(data);
    if(!validation.success) throw new Error("Form not valid");
    /*@ts-ignore */ //Provisional while images are disabled
    const {title, url, adImage} = data;
    await new Promise(resolve => setTimeout(resolve, 3000));
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
export async function GetAllProjects() {
    try {
        const projects = await prisma.project.findMany()
        return projects
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong")
    }
}

//Get Project By Id
export async function GetProjectById(id: number) {
    if(!id || isNaN(id)) throw new Error("Couldnt retrieve project id.")
    try {
        const project = await prisma.project.findUnique({
            where: {
                id
            }
        })
        return project
    } catch (error) {
        console.log(error)
        throw new Error("Project not found.")
    }
}

//UpdateProject
export async function UpdateProject() {

}

//DeleteProject
export async function DeleteProject() {

}

//https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
    //ref for later