import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/sander1.png";
import glassesimoji from "../../img/conding.png";
import Github from "../../img/github4.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Sander Kerby Seide</span>
          <span style={{ color: darkMode ? "white" : "" }} className="text1">
          Frontend Developer with high level of experience in web designing and app mobile development. 
I am the most active user on github in my country. 

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" /> 
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector1} alt="" /> */}
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

       

        {/* <motion.div */}
          {/* // initial={{ left: "-9rem", top: "16rem" }}
          // whileInView={{ left: "30%" }}
          // transition={transition}
          // className="floating-div" */}
        {/* > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Full stack" text2="Developper" />
        </motion.div>  */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem", top: "rem" }}
          transition={transition}
          className="floating-div bt"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="APP Mobile" text2="Developper" />
        </motion.div>  */}

        {/* <motion.div
          initial={{ left: "18rem", top: "10rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Web designer" text2="UI/UX" />
        </motion.div>  */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
