import ProjectItem from "../components/project/ProjectItem";
import Filter from "../components/project/Filter";
import Title from "../components/shared/Title";
import MainContext from "../context/MainContext";
import { useContext} from "react";
import Project from "../interfaces/project";

function Projects(): JSX.Element {
  const {initialState, filterProjects} = useContext(MainContext)
  const {filteredProjects} = initialState

  return (
    <>
      <header className="projectHeader">
        <Title title="Projects"/>
      </header>
      <Filter filterFunc={filterProjects}/>
      <div className="projects-container">
        {filteredProjects.map((project: Project, index: number) => (
          <ProjectItem key={index} project={project}/>
        ))}
      </div>
    </>
  )
}

export default Projects
