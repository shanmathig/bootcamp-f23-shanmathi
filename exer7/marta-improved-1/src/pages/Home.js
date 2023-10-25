import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import stripes from "./stripes.png"; 
import martahome from "./martahome.avif"; 

function Home() {
  const navigate = useNavigate(); 
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
    <div className ="row1">
    <div className = "marta-logo">
      <h1>MARTA</h1>
      <img src={stripes} alt="STRIPES" width="150" height="65"/>
      </div>
      <button onClick={goToAbout}>About Page</button>
    </div>

    <div className= "row2">
        <div className="routes">
            <h1 className='view'>VIEW ROUTES SCHEDULE</h1>
            <div className="route" onClick={() => {navigate("/lines/gold")}}>GOLD LINE</div>
            <div className="route" onClick={() => {navigate("/lines/red")}}>RED LINE</div>
            <div className="route" onClick={() => {navigate("/lines/green")}}>GREEN LINE</div>
            <div className="route" onClick={() => {navigate("/lines/blue")}}>BLUE LINE</div>
        </div>

        <div className = "martahome">
            <img src={martahome} alt="MARTAHOME" width="600" height="300"/>
        </div>
    </div>
    </div>

  );
}

export default Home;
