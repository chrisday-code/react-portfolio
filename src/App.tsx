import React from 'react';
import { Box } from '@mui/material';
import Navbar from './NavBar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './styles.css';
import { useRef } from 'react';
import Footer from './Footer';


function App() {
  const resultRef = useRef(null);
  
  return (<div style={{
    background: 'linear-gradient(transparent, rgb(6,47,79, 0.5))',
    backgroundAttachment: 'fixed'
    }}>
    <Navbar experience={resultRef}/>
    <Home />
    <About/>
    <Experience ref={resultRef} />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App;
