import { createContext } from "react"
import cuteGhost from "../components/assets/imgs/CuteGhost.png"

const MainContext = createContext()

export const MainProvider = ({children}) => {
   // : {name: String, description: String, img: any, tags: {technologies: String[], type: String[], teamMembers: String?[]}}
   let allProjects = [
      {name: "The Elementalist", description: "text", img: cuteGhost, tags: {technologies: ["Unity"], type: ["UI/UX"], teamMembers: ["Wang Liao", "Eric Ramirez"]}},
      {name: "RSA Encryption Program", description: "text", img: cuteGhost, tags: {technologies: ["Python", "Tkinter", "C"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: ["Jason Yu"]}},
      {name: "Spider", description: "text", img: cuteGhost, tags: {technologies: ["Python", "AWS", "BeautifulSoup4"], type: ["Backend"], teamMembers: ["Coen Adler"]}},
      {name: "Ca-PITY-lism", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS", "JavaScript"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: []}},
      {name: "Photography Website", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS"], type: ["Frontend"], teamMembers: []}},
      {name: "Portfolio Website", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript?"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: []}},
      {name: "Recipe Retriever", description: "text", img: cuteGhost, tags: {technologies: ["Kotlin", "Android Studio"], type: ["Frontend"], teamMembers: ["Venky Nandapurkar", "Kim Ho", "Jackson Kohls", "Prithvi Arunshankar"]}},
   ]

   const initialState = {
      filters: [null, null],
      // semiFilteredProjects: allProjects,
      filteredProjects: allProjects
   }

   // if I'm using a reducer
   // const [state, dispatch] = useReducer(mainReducer, initialState)

   const filterProjects = (val, key) => {
      if (initialState.filters[key] == null) {
         // New Filter (Initial Filter)
         initialState.filters[key] = val;
         initialState.filteredProjects = {}
         initialState.filteredProjects.filter(project => project.tags["technologies"].includes(val) || project.tags["type"].includes(val))
         return;
      }
      if (val === "All") {
         // Reset Filter Param (User Clicked All)
         initialState.filters[key] = null
      } else {
         // Edit Filter Param
         initialState.filters[key] = val
      }
      console.log(initialState.filteredProjects, initialState.filters)
      // Pure Filter Func
      initialState.filteredProjects = allProjects;
      initialState.filteredProjects.filter(project => {
         let retBool = true
         for (let filter in initialState.filters) {
            if (filter == null) {continue;}
            retBool = retBool && (project.tags["technologies"].includes(filter) || project.tags["type"].includes(filter))
         }
         return retBool
      })
    }

   return <MainContext.Provider value = {{
      // ...state,
      // dispatch,
      initialState,
      filterProjects,
   }}>
      {children}
   </MainContext.Provider>
}

export default MainContext;