import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <Router className="bg-purple-500">
        <div className="flex flex-col justify-between h-screen">
          <Navbar title="Portfolio - Kevin Yosifov"/>
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/:projectName" element={<Projects/>}/>
              {/* 
              <Route path="/about" element={<About/>}/>
              <Route path="/projects/:projectName" element={<Projects/>}/>
              < path="/notfound" element={<NotFound/>}/>
               */}
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </MainProvider>
  )
}

export default App;
