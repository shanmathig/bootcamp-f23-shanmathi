import React from "react";
import { useNavigate } from "react-router-dom";
import './About.css';
import martaImage from "./marta.webp"; 


function About() {
    const navigate = useNavigate(); 
    const goToHome = () => {
        navigate("/");
      };

  return (
    
    <div className="content">
    <div className ="row1">
        <div className = "about">
        <h1>ABOUT</h1>
        </div>
      <button onClick={goToHome}>Home Page</button>
    </div>
    <div className = "description">
    <p>
        MARTA (Metropolitan Atlanta Rapid Transit Authority) is the principal
        public transportation system in the Atlanta metropolitan area. It
        provides bus and rapid transit services to millions of residents and
        visitors in the Atlanta region.
      </p>
      </div>
    <div className= "description">

      <img src={martaImage} alt="MARTA" />

    </div>
    </div>
  );
}

export default About;
