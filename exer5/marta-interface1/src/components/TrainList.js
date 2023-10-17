import React from 'react';
import Train from './Train';

const TrainList = ({ data }) => {
  if (!data || !data.RailArrivals) {
    return <div>Data not available.</div>;
  }

  // Filter the data to get only the trains on the Gold line
  const goldLineTrains = data.RailArrivals.filter((train) => train.LINE === 'GOLD');

  return (
    <div className="train-list">
      <h2>GOLD</h2>
      <div className="trains">
        {goldLineTrains.map((train, index) => (
          <div key={index}>
            <Train trainData={train} />
            {index < goldLineTrains.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;

