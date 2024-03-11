import { projectSchema, projectSchemaType } from "@/schemas/project";
import prisma from "@/lib/prisma";

class ProjectNotFountErr extends Error {};

import { PrismaClient } from '@prisma/client'


export async function CreateProject(data: projectSchemaType) {
    const validation = projectSchema.safeParse(data);
    if(!validation.success) throw new Error("Form not valid");
    
    const {title, url, adImage} = data;
    const project = await prisma.project.create({
        data: {
            title,
            URI: url,
            icon: adImage,
            // comments: ""
        }
    })
    if(!project) throw new Error("something went wrong")

    return project.id
}

export async function GetProjects() {
    
}

export async function GetProjectById() {

}

export async function UpdateProject() {

}

export async function DeleteProject() {

}

//https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
    //ref for later