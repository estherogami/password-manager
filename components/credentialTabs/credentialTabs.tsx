import { getAllCredentials } from "@/api/credentials_db";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { slugify } from "@/lib/utils";
import { Credentials } from "@prisma/client";
import { MdArrowRight } from "react-icons/md";

async function CredentialTabs() {
    const credentials: Credentials[] = await getAllCredentials();

    return (
        <Tabs defaultValue="account" className="flex gap-5">
            {/* Tabs list */}
            <div className="w-[300px]">
                <TabsList className="grid w-full grid-cols-1">
                    {credentials.map((credential) => <TabsTrigger key={credential.id} value={slugify(credential.title)} className="flex justify-between">
                        {credential.title} <MdArrowRight />
                    </TabsTrigger>)}
                </TabsList>
            </div>

            {/* Tabs content */}
            <div className="grow">
                {credentials.map((credential, i) => <TabsContent key={credential.id} value={slugify(credential.title)}>
                    {credential.title}
                </TabsContent>)}
            </div>
        </Tabs>
    )
}

export default CredentialTabs
