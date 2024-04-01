import ProjectItem from "../components/ProjectItem";
import Filter from "../components/shared/Filter";
import Title from "../components/shared/Title";
import MainContext from "../context/MainContext";
import { useContext } from "react";

function Projects() {
  const {initialState} = useContext(MainContext)
  const {projects} = initialState

  return (
    <>
      <header className="projectHeader">
        <Title title="Projects"/>
      </header>
      <div className="projects-container">
        <Filter/>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project}/>
        ))}
      </div>
    </>
  )
}

export default Projects
