import React, { useContext,useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience'
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext} from './Context';
import { UseContext } from "react";
import { Container, Col } from 'react-bootstrap'
import breakPointObserver from "./Components/shared/breakPointObserver"

const breakPoints = {
  mobile: "(max-width:600px)",
  tablet: "(min-width:600px) and (max-width:768px)",
  laptop: "(min-width:769px) and (max-width:1024px)",
  desktop: "(min-width:1024)",
};

function App() {
  const [breakPoints, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color : darkMode? 'white': '',
      gap: '10rem'
    }}>
      <div class="container mx-auto">
   
      <Navbar/>
      <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    
       </div>
    </div>
  );
}

export default App;
