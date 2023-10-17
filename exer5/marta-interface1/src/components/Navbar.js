import React from 'react';

export default function Navbar(props) {
    const {currColor, stationData} = props;
    const stations = stationData[currColor.toLowerCase()];
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
