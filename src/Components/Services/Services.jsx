import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/design3.png";
import Glasses from "../../img/language.png";
import Humble from "../../img/design1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Sander-Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div class="container mx-auto">
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My significant</span>
        <span>services</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
        All aspects of web design and mobile applications. Building and managing
          <br />
          databases. The services are high quality and secure.
        </spane>
        <div>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" >
        {/* first card */}
        <motion.div
          initial={{ left: "18rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div> 
        {/* second card */}
        <motion.div
          initial={{ left: "-8rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Language"}
            detail={"Html, Css, JavaScript, Python, Java, PHP"}
          />
        </motion.div>
        {/* 3rd */}
        
        <motion.div
          initial={{ top: "19rem", left: "16rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools"}
            detail={
              "Bootstrap, React, React Native, Tailwind, Firebase, Android studio"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      </div>
    </div>
  );
};

export default Services;
