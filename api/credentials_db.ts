"use server"
import prisma from "@/lib/prisma";

//Create credential
export async function createCredential(title: string, pid: number){
    //Check if pid exists before create+
    const credential = await prisma.credentials.create({
        data: {
            pid,
            title
        }
    })
    if(!credential) throw new Error("something went wrong")

    return credential.id
}