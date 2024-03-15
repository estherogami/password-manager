import { GetAllProjects } from "@/api/project_db"
import ProjectListCardItem from "./projectListCardItem";

async function ProjectList() {
    const projects = await GetAllProjects();
    return (
        <ul className="grid md:grid-cols-3 gap-5 ">
            {projects.map((project) =>
                <li key={project.id}>
                    <ProjectListCardItem project={project} />
                </li>)}
        </ul>
    )
}

export default ProjectList
