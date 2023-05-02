import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';   
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    
    </ChakraProvider>
  
  );
}

export default App;
