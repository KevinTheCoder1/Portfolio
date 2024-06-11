import { useState } from "react";
import Project from "../../interfaces/project"
import { Link } from "react-router-dom";

interface ProjectItemProps {
   project: Project
}

function ProjectItem(props: ProjectItemProps): JSX.Element {
   const {name, description, data, tags} = props.project
   const tech = tags.technologies.join(', ').split('');
   const team = tags.teamMembers.join(', ').split('');
   let shortDesc: string = description.slice(0, 50)
   const [expand, setExpand] = useState<boolean>(shortDesc.length < 50)

   const toggleExpand = () => {
      setExpand(!expand)
   }

   return (
      <div className="projectCard card shadow-lg bg-neutral text-neutral-content">
         <div className="projectImgContainer">
            <img src={data[1]} className='projectImg' alt={name}/>
         </div>
         <div className="project-content">
            <div className='projectName'>{name}</div>
            {expand && <div className='projectDesc-expanded'>{description} <Link to={`/projects/${name}`} className="read-more">Learn More</Link></div>}
            {!expand && <div className='projectDesc-short'>{shortDesc}... <span onClick={toggleExpand} className="read-more">Read More</span></div>}
            <div className='projectTags'>
               <div className="projectTech">Technologies: {tech}</div>
               {(team.length > 0) && (
                  <div className="projectTeam">Team Members: Kevin Yosifov, {team}</div>
               )}
            </div>
         </div>
      </div>
   )
}

export default ProjectItem
