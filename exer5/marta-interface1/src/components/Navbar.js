import React from 'react';

const Navbar = ({ line }) => {
  // Get the starting stations for the Gold line
  const goldStations = [
    'All stations',
    'Chamblee',
    'Brookhaven',
    'Midtown',
    'North Avenue',
    'Airport',
  ];

  return (
    <div className="navbar">
      <h2>Select your starting station</h2>
      <ul>
        {goldStations.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
