import { GetAllProjects } from "@/api/project_db"
import ProjectListCardItem from "./projectListCardItem";

async function ProjectList() {
    const projects = await GetAllProjects();
    console.log(projects);
    
  return (
    <div>
      {projects.map((project) => 
        <ProjectListCardItem key={project.id} />)}
    </div>
  )
}

export default ProjectList
