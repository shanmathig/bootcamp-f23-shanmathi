import TrainList from '../components/TrainList';
import Navbar from '../components/Navbar';
import trainData from '../server/trainData';
import stationData from '../server/stationData';
import React, { useState } from 'react';


const LinesPage = () => {
    const [currColor, setCurrColor] = useState("GREEN");
    return (
        <div className="linespage">
            <div className="navbar-container">
                <Navbar currColor={currColor} stationData={stationData} />
            </div>
            <div className="content">
                <h1>{currColor}</h1>
                <TrainList userLine={currColor} trainData={trainData} />
            </div>
        </div>
    );
  };
  

export default LinesPage;