import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/wordpress.png";
import Fiverr from "../../img/browser.png";
import Amazon from "../../img/logo_uespoir.png";
import Shopify from "../../img/glob.png";
import Facebook from "../../img/php.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesomee">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Bachelor's Degree at
          </span>
          <span>Universite Espoir</span>
          <spane style={{ color: darkMode ? "white" : "" }}>
          As a passionate about programming, I was able to acquire a variety of
            <br />
            knowledge. I have developed my skills and become more productive
            <br />
            through online classes. Thanks to my efficiency, I have been 
            <br />
            selected to be Tech Fellows on codepath so I can share my 
            <br />
            knowledge with other students.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
