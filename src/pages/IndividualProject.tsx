import { useContext } from "react";
import Project from "../interfaces/project"
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";
import Showcase from "../components/project/Showcase";

function IndividualProject(): JSX.Element {
   const {projectName} = useParams<string>()
   const {initialState} = useContext(MainContext)
   const project: Project = (initialState.filteredProjects.filter(prj => prj.name === projectName))[0]
   const tech = project.tags.technologies.join(', ').split('');
   const team = project.tags.teamMembers.join(', ').split('');

   return (
      <div className="specificProjectCard card shadow-lg bg-neutral text-neutral-content">
         <Showcase data={project.data}/>
         <div className="pt-5 projectName">{project.name}</div>
         <div className="projectFullDesc">{project.fullDesc}</div>
         <div className='projectTags'>
         <div className="projectTech">Technologies: {tech}</div>
            {(team.length > 0) && (
               <div className="projectTeam">Team Members: Kevin Yosifov, {team}</div>
            )}
         </div>
      </div>
   )
}

export default IndividualProject
