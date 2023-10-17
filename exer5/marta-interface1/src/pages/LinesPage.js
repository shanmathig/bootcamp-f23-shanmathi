// import TrainList from '../components/TrainList';
// import Navbar from '../components/Navbar';
// import trainData from '../server/trainData';
// import React, { useState } from 'react';


// const LinesPage = () => {
//   // You can add specific data for the Gold line if needed
//   const [currColor, setCurrColor] = useState("GOLD");

//   return (
//     <div className="linespage">
//         <h1>{currColor}</h1>
//         <Navbar currColor={currColor} stationData={stationData} />
//         <TrainList userColor={currColor} trainData={trainData} />
//     </div>
//   );
// };

// export default LinesPage;
import TrainList from '../components/TrainList';
import Navbar from '../components/Navbar';
import trainData from '../server/trainData';
import stationData from '../server/stationData';
import React, { useState } from 'react';


const LinesPage = () => {
    // You can add specific data for the Gold line if needed
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