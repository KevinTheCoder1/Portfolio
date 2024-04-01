import React from 'react'

function Card({project}) {
   const {name, description, img} = project
   return (
      <div className='projectCard card'>
         <div className='projectImg'>{img}</div>
         <div className='projectName'>{name}</div>
         <div className='projectDesc'>{description}</div>
      </div>
   )
}

export default Card
