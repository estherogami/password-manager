"use server"
import prisma from "@/lib/prisma";

//Create credential
export async function createCredential(title: string, pid: number) {
    //Check if pid exists before create+
    const credential = await prisma.credentials.create({
        data: {
            pid,
            title
        }
    })
    if (!credential) throw new Error("something went wrong")

    return credential.id
}

//Get all credentials (edit to get by project)
export async function getAllCredentials() {
    try {
        const credentials = await prisma.credentials.findMany();
        if (!credentials) throw new Error("Something went wrong")
        return credentials;
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong")
    }
}