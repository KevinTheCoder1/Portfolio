import React from 'react'

function ProjectItem({project}) {
   const {name, description, img} = project
   return (
      <div className="projectCard card shadow-lg bg-neutral text-neutral-content">
         <img src={img} className='projectImg' alt={name}/>
         <div className='projectName'>{name}</div>
         <div className='projectDesc'>{description}</div>
      </div>
   )
}

export default ProjectItem
