import { GetProjectById } from "@/api/project_db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import NewCredentialForm from "@/components/credentialForm/newCredentialForm";

 




async function Builder({ params }: { params: { pid: string } }) {
    const { pid } = params;
    const project = await GetProjectById(parseInt(pid));

    return (
        <div className="h-full p-5 bg-[url('/images/graph-paper.svg')]">
            <div className="flex justify-between flex-wrap h-[50px] w-full ">
                <Link href="/" className=" items-center flex text-slate"><GoArrowLeft /> Go back</Link>
                <Button type="submit">Save</Button>
            </div>


            <div className="w-full my-5">
                <NewCredentialForm />
            </div>
            <div className="flex flex-wrap gap-2 justify-between">
                <div className="grow">
                    <Card >
                        <CardHeader>
                            <CardTitle>Credentials list</CardTitle>
                            <CardDescription>Drag and drop to modify order. <br />Click to modify options</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    draggable list of credentials here
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-[350px]">
                    <Card >
                        <CardHeader>
                            <CardTitle>Credential info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    credentials info (user,pass, url, etc)
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">add extra field</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Builder
