import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import NewCredentialForm from "@/components/builder/credentialForm/newCredentialForm";
import { Button } from "@/components/ui/button";
import { BuilderProvider } from "../builderContext/builderContext";
import CredentialList from "../credentialList/credentialList";
import { Credentials } from "@prisma/client";


function Builder({ pid, credentials }: { pid: number, credentials: Credentials[] | null  }) {

    const handleSelectedCredential = () => {}

    return (
        <>
            <BuilderProvider>
                <div className="w-full my-5">
                    <NewCredentialForm pid={pid} />
                </div>
                <div className="flex flex-wrap gap-2 justify-between">
                    <div className="grow">
                        <Card >
                            <CardHeader>
                                <CardTitle>Credentials list</CardTitle>
                                <CardDescription>Drag and drop to modify order. <br />Click to modify options</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CredentialList pid={pid} credentials={credentials} />
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
            </BuilderProvider>
        </>
    )
}

export default Builder
