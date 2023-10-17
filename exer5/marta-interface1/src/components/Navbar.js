import React from 'react';

export default function Navbar(props) {
    // Get the starting stations for the Gold line
    const {currColor, stationData} = props;
    const stations = ["Doraville", "Chamblee", "Brookhaven", "Lenox", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"]

  return (
    <div className="navbar">
      <h2>Select your starting station</h2>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </ul>
    </div>
  );
};
