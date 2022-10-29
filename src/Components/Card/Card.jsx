import React, { useContext } from "react";
import "./Card.css";

import { themeContext } from "../../Context";

const Card = ({emoji, heading, detail, color}) => {
  const transition = { duration: 2, type: "spring" };

  // context
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
  
    </div>
  );
};

export default Card;
