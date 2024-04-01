import  { FaBriefcase } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar({title}) {
  return (
    <nav className="navbar mb-20 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flexNone px-2 mx-5">
          <FaBriefcase className="inline pr-2 text-3xl"/>
          <Link to="/" className="text-lg font-bold align-middle">{title}</Link>
        </div>
      </div>
      <div className="flex-1 px-2 mx-5">
        <div className="flex justify-content">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn btn-hover">Home</Link>
          <Link to="/projects" className="btn btn-ghost btn-sm rounded-btn btn-hover">Projects</Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn btn-hover">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
