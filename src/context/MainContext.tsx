import { createContext, useState } from "react"
import Project from "../interfaces/project"
const cuteGhost = require('../components/assets/imgs/CuteGhost.png')

// The Elementalist Assets
const TEpower1 = require("../components/assets/imgs/Elementalist/Tree.png")
const TEpower2= require("../components/assets/imgs/Elementalist/Water.png")
const TEpower3 = require("../components/assets/imgs/Elementalist/Fireball.png")
const TEmaps = require("../components/assets/imgs/Elementalist/Cool Maps.png")
const TEbosses = require("../components/assets/imgs/Elementalist/Bosses.png")
const TEquests = require("../components/assets/imgs/Elementalist/Quests.png")
const TEVid = require("../components/assets/vids/The_Elementalist_Playthrough_Full.mp4")

// Recipe Retriever Assets
const RRVid = require("../components/assets/vids/Recipe Retriever Demo.webm")
const RRHome = require("../components/assets/imgs/Recipe Retriever/Home Page.png")
const RRFridge = require("../components/assets/imgs/Recipe Retriever/Fridge Page.png")
const RRRecipeMain = require("../components/assets/imgs/Recipe Retriever/Main Recipe Page.png")
const RRRecipeSpecific = require("../components/assets/imgs/Recipe Retriever/Specific Recipe Page.png")

// Spider Assets
const SDemo = require("../components/assets/vids/Spider_demo.mp4")
const SOverview = require("../components/assets/imgs/Spider/Spider.jpg")
const Sresults = require("../components/assets/imgs/Spider/MobileVersion.png")
const SsingleResult = require("../components/assets/imgs/Spider/Webcrawler.png")

// RSA Assets
const RSAVid = require("../components/assets/vids/RSA Demo.webm")
const RSA1 = require("../components/assets/imgs/RSA Encryption Program/Start.png")
const RSA2 = require("../components/assets/imgs/RSA Encryption Program/KeyGen.png")
const RSA3 = require("../components/assets/imgs/RSA Encryption Program/pubKey.png")
const RSA4 = require("../components/assets/imgs/RSA Encryption Program/Encryption.png")
const RSA5 = require("../components/assets/imgs/RSA Encryption Program/privKey.png")
const RSA6 = require("../components/assets/imgs/RSA Encryption Program/Decryption.png")
const RSA7 = require("../components/assets/imgs/RSA Encryption Program/NormalDecrypted.png")

// Yoga Studio Project Assets
const YSPDemo = require("../components/assets/vids/YogaStudioProjectDemo.mp4")
const YSPLogin = require("../components/assets/imgs/YogaStudioProject/Login.png")
const YSPClientInfo = require("../components/assets/imgs/YogaStudioProject/Client Info.png")
const YSPCourseRegi = require("../components/assets/imgs/YogaStudioProject/Course Registration.png")
const YSPClientCourses = require("../components/assets/imgs/YogaStudioProject/Client Courses.png")
const YSPCourseInfo = require("../components/assets/imgs/YogaStudioProject/Course Info AND Attedence.png")

const MainContext = createContext<MainProviderType>({} as MainProviderType)

interface State {
   filters: (string | null),
   filteredProjects: Project[],
   filterOptions: string[]
}

interface MainProviderType {
   initialState: State,
   filterProjects: (val: string) => void,
}

interface MainProviderProps {
   children: JSX.Element
}

// const oldData: Project[] = [
//    {name: "The Elementalist", description: "text", img: cuteGhost, tags: {technologies: ["Unity"], type: ["UI/UX"], teamMembers: ["Wang Liao", "Eric Ramirez"]}},
//    {name: "RSA Encryption Program", description: "text", img: cuteGhost, tags: {technologies: ["Python", "Tkinter", "C"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: ["Jason Yu"]}},
//    {name: "Spider", description: "text", img: cuteGhost, tags: {technologies: ["Python", "AWS", "BeautifulSoup4"], type: ["Backend"], teamMembers: ["Coen Adler"]}},
//    {name: "Ca-PITY-lism", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS", "JavaScript"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: []}},
//    {name: "Photography Website", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS"], type: ["Frontend"], teamMembers: []}},
//    {name: "Portfolio Website", description: "text", img: cuteGhost, tags: {technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"], type: ["Frontend", "Backend", "Fullstack"], teamMembers: []}},
//    {name: "Recipe Retriever", description: "text", img: cuteGhost, tags: {technologies: ["Kotlin", "Android Studio"], type: ["Frontend"], teamMembers: ["Venky Nandapurkar", "Kim Ho", "Jackson Kohls", "Prithvi Arunshankar"]}},
// ]


export const MainProvider: React.FC<MainProviderProps> = ({children}) => {
   const allProjects: Project[] = [
      {name: "Recipe Retriever", 
      description: "Recipe Retriever is an android application made with the intention to help students find recipes they can make with the foods they have available.", 
      fullDesc: "Recipe Retreiver is an Android Application made by Kevin Yosifov, Venky Nandapurkar, Kim Ho, Jackson Kohls, and Prithvi Arunshankar in order to help students find interesting recipes they can make with the food they have available. We started this project as part of a project management class where we were taught various Agile and Scrum methodologies and were required to use them as we worked on any technical project we wanted. This was a very freeform class so we were given free reign on what we could make. We really wanted to create somethign that would be essential to our daily lives so we chsoe to create a project that could tell us what recipes we could make with whatever we have in our fridge at the moment. As most of the team members had Android phones, we chose to create an Android Application as we wanted to create a project we could actually use in or daily lives. To tackle this split our team into 5 parts, with Jackson working on the backend and security, Kim working on the backend and focusing on databases, Prithve working on integrating the frontend and backend, Kevin working on the frontend, and Venky working fullstack helping out wherever needed. We decided that it'd be an interesting challenge to learn new langauges together so we chose to complete this project using Go, KLotlin, and Android Studio, which were languages/technologies none of us were familiar with. Working on the frontend, I presonally used Kotlin and Android Studio to create the application interface you can see in the video above. The actual application is quite simple and easy to use. Users just input whatever foods they have available into their fridge in the app and then go to the recipe page and get recipes they can make. In order to get the recipes a user can make, we queried an API called spooacular. Users can also filter what foods they want to use and if they don't know what recipe to pick, we even added a button to randomly pick a recipe for them. We also created a grocery page so that if they run out of a specific food, like eggs, they can put it in the grocery page to easily remember what to get from the supermarket.",
      data: [RRVid, RRHome, RRFridge, RRRecipeMain, RRRecipeSpecific], 
      tags: {technologies: ["Kotlin", "Android Studio"], teamMembers: ["Venky Nandapurkar", "Kim Ho", "Jackson Kohls", "Prithvi Arunshankar"]}},
      {name: "The Elementalist", 
      description: "Created by Kevin Yosifov, Wang Liao, and Eric Ramirez, the Elementalist is a 2D platformer where you gain abilities that allow you to climb, destroy, freeze, and more as you journey to slay an evil wizard. This game was developed with Unity.", 
      fullDesc: "The Elementalist is a 2D platformer game developed with Unity which follows a young wizard in his adventure to slay an evil wizard and restore his world to it's former glory. As the wizard traverses the landscape, he gains new abilities which allow him to get through each floor. The first ability allows him to throw tree branches and then cliomb on them to get to hard to reach places. The ssecond ability allows him to freeze enemies and the third ability allows him to destroy wooden boxes. As the wizard traverses the land, he kills the wizard's golems until (Spoiler!) he meets the final golem, his father. His father explains that the wizard is actually trying to save the world and you go to help the wizard, traversing back through the levels wih your newfound powers. This game was a team project for my game design class and it was really fun to work on (I'm also really proud of how it turned out). Wang Liao (The Coder) was in charge of all of the coding, so creating the abilities, movement, enemy mechanics, etc. Eric Ramirez (The Artist) was in charge of the assets so the amazing background, cool bosses, and cute enemies are all thanks to him. Lastly, Kevin Yosifov (The Designer) was in charge of the storyline, game/level design, and thinking of the game mechanics that Wang then created. This meant that I pretty much took all the things that Wang and Eric creted and mushed them together into a great game. For this project, I naturally took on the a leadership position due to my role as designer, as it was my responsibility to develop the idea into a game and I was just a central point of contact. We worked really well together as a team and I'm really proud of the game that we created together.\n Fun fact: Due to some miscommunication, I actually had to recreate the designs for all the levels. I'm glad that happened though because the new level designs are a lot cooler and more fun to play than the initial ones.\n Fun Fact #2: I was the only one in my team who actually played the game and I have spent well over 10 hours playing the game (The video above is a 40 minute clip of my playthrough the entire game (minus the intro))",
      data: [TEVid, TEpower1, TEpower2, TEpower3, TEmaps, TEbosses, TEquests], 
      tags: {technologies: ["Unity"], teamMembers: ["Wang Liao", "Eric Ramirez"]}},
      {name: "RSA Encryption Program", 
      description: "This was a program made to allow a user to encrypt and decrypt files using the RSA Algorithm. The encryption and decryption functions are coded in C and then Tkinter is used to create a GUI to make the application easily accessable to users with little to no knowledge of computer systems.", 
      fullDesc: "This was a program made to allow a user to encrypt and decrypt files using the RSA Algorithm. The encryption and decryption functions are coded in C and then Tkinter is used to create a GUI to make the application easily accessable to users with little to no knowledge of computer systems. My role in this project consisted of debugging, refactoring code, creating a GUI, and linking the GUI to the C files (which was quite challenging since we had used a non-standard library in the C files which led to compilation issues).",
      data: [RSAVid, RSA7, RSA1, RSA2, RSA3, RSA4, RSA5, RSA6, RSA7], 
      tags: {technologies: ["Python", "Tkinter", "C"], teamMembers: ["Jason Yu"]}},
      {name: "Spider", 
      description: "Spider is a web-crawler that scraped a news source and sent subcribers relevent articles. We used Amazon Web Services to craete a Pub/Sub model to send subscribers relevent articles via email.", 
      fullDesc: "Spider is a web-crawler that scraped a news source, namely Fox News and sent subcribers relevent articles. The steps in this project were fairly simple. First, I created the webcrawler to scrape a website and tehn another webcrawler function to scrape the articles. Then Coen sent the articles through a natural language processor to find the most relevent keywords in the articles. Then we matched the article keywords to the subscribers' keywords and used SendGrid to send subscribers relevent articles via email. Lastly, I automated the functions using a sceduler via AWS so that it would scrape the news website daily.",
      data: [SDemo, SOverview, Sresults, SsingleResult],
      tags: {technologies: ["Python", "AWS", "BeautifulSoup4"], teamMembers: ["Coen Adler"]}},
      {name: "Ca-PITY-lism", 
      description: "text", 
      fullDesc: "TEXT",
      data: [null, cuteGhost],
      tags: {technologies: ["HTML", "CSS", "JavaScript"], teamMembers: []}},
      {name: "Slugloop", 
      description: "text", 
      fullDesc: "TEXT",
      data: [null, cuteGhost],
      tags: {technologies: ["HTML", "CSS"], teamMembers: []}},
      {name: "Yoga Studio Project", 
      description: "This project was, surprisingly, developed due to a job application for a Filemaker Associate Developer position. After two days of watching tutorials, Kevin Yosifov dove deep into Filemaker to create this fullscale application for a fake small yoga studio company.", 
      fullDesc: "This project was, surprisingly, developed due to a job application for a Filemaker Associate Developer position. After two days of watching tutorials, Kevin Yosifov dove deep into Filemaker to create this fullscale application for a fake small yoga studio company. This app has different roles including, Client, Receptionist, Instructor, and Manager, which allow different users to perform different actions. The app also facilitates signing up/editting courses, registering as a new client, paying for courses, and much more. It's a full-scale app that can even be used for a real client (although it is quite rough around the edges).",
      data: [YSPDemo, YSPLogin, YSPClientInfo, YSPCourseRegi, YSPClientCourses, YSPCourseInfo],
      tags: {technologies: ["FileMaker", "SQL"], teamMembers: []}},
      {name: "Portfolio Website", 
      description: "text", 
      fullDesc: "TEXT",
      data: [null, cuteGhost],
      tags: {technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"], teamMembers: []}},
   ]

   // Relational Database in the form of a dictionary
   const typeToTech: {
      "UI/UX": string[],
      "Frontend": string[],
      "Backend": string[]
   } = {
      "UI/UX": ["Unity", "FileMaker"],
      "Frontend": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tkinter", "Kotlin", "Android Studio", "FileMaker"],
      "Backend": ["Python", "C", "BeautifulSoup4", "AWS", "JavaScript", "TypeScript", "SQL"]
   }

   const [filteredProjects, setFilteredProjects] = useState<Project[]>([...allProjects])
   const [filters, setFilters] = useState<(string | null)>(null)   

   const initialState: State = {
      filters,
      filteredProjects,
      filterOptions: [...Object.keys(typeToTech)]
   }

   // if I'm using a reducer
   // const [state, dispatch] = useReducer(mainReducer, initialState)

   const filterProjects = (val: string) => {
      // TypeScript fix - Basically, define val as a key of the relational dictionary
      const myVal = val as keyof typeof typeToTech;
      if (val === "All") {
         if (filters !== null) {
            // Reset Filter Param (User Clicked All)
            setFilters(null)
            // Reset Filtered Projects to All Projects
            setFilteredProjects(allProjects)
         }         
      } else {
         // Edit Filter Param
         setFilters(val)
         // Pure Filter Func
         setFilteredProjects(allProjects.filter(project => {
            return typeToTech[myVal].some(tech => project.tags["technologies"].includes(tech))
         }))
      }  
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