import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';   
import { ChakraProvider } from "@chakra-ui/react"
import './App.css'

function App() {
  return (
    <div className="App">
    <ChakraProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <About />
    <Services />
    <Projects />
    <Contact />
    
    
    </ChakraProvider>
  </div>
  );
}

export default App;
