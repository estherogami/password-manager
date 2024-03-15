import ProjectForm from "@/components/projectForm/projectForm"


function NewProjectPage() {
  return (
    <div className="flex flex-wrap flex-row h-full max-h-100 justify-center content-center bg-[url('/images/graph-paper.svg')]">
      <div>
        <ProjectForm />
      </div>
    </div>
  )
}

export default NewProjectPage
