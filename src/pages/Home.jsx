import React from 'react'
import Title from '../components/shared/Title'
import Button from '../components/shared/Button.jsx'

function Home() {
   const showEducation = () => {
      
   }

   const showOther = () => {
      
   }

   return (
      <>
         <Title title="Experience"/>
         <div className="flex mx-auto p-3 container">
            <div className='mainButtons'>
               <Button classes={"flex-auto hover:space-x-8"} text="Education" onClickHandler={showEducation}/>
               <Button classes={"flex-auto hover:space-x-8"} text="Work/Skills" onClickHandler={showOther}/>
            </div>
         </div>
         {/* <UserSearch/>
         <UserResults/> */}
      </>
   )
}

export default Home
