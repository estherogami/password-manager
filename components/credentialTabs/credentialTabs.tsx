import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import { MdArrowRight } from "react-icons/md"; 

function CredentialTabs() {
  return (
     <Tabs defaultValue="account" className="flex gap-5">
        {/* Tabs list */}
        <div className="w-[300px]">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="account" className="flex justify-between">Git<MdArrowRight />
            </TabsTrigger>
            <TabsTrigger value="password" className="flex justify-between">Mail<MdArrowRight />
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tabs content */}
        <div className="grow">
          <TabsContent value="account">
            tab content 1
          </TabsContent>
          <TabsContent value="password">
            tab content 2
          </TabsContent>
        </div>
      </Tabs>
  )
}

export default CredentialTabs
