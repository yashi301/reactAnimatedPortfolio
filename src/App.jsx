

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Aboutme from './Components/About'
function App() {
 useEffect(()=>{
Aos.init();
 },[])

  return (
    <>
     <Navbar/>
     <Home/>
     <Aboutme/>
     <Skills/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
