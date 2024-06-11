import Project from "../../interfaces/project"

interface CardProps {
   project: Project
}

function Card({project}: CardProps): JSX.Element  {
   const {name, description, data} = project
   return (
      <div className='projectCard card'>
         <div className='projectImg'>{data}</div>
         <div className='projectName'>{name}</div>
         <div className='projectDesc'>{description}</div>
      </div>
   )
}

export default Card;
