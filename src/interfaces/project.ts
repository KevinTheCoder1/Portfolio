// enum types {
//     "UI/UX",
//     "Frontend",
//     "Backend",
//     "Fullstack"
// }

export default interface Project {
    name: string,
    description: string,
    fullDesc: string;
    data: any[],
    tags: {
        technologies: string[],
        teamMembers: string[],
    }
}