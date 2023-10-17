import React from 'react';

const Train = ({ trainData }) => {
  const { STATION, DESTINATION, HEAD_SIGN, LINE, WAITING_SECONDS, DELAY } = trainData;
  const isOnTime = DELAY === 'T0S';
  const waitingMinutes = Math.floor(parseInt(WAITING_SECONDS) / 60);

  return (
    
    <div className={`train ${isOnTime ? 'on-time' : 'delayed'}`}>
  <div className="big-letter">
    <h3>M</h3>
  </div>

  <div className="row1">
    <div className="info">
      {STATION} - {DESTINATION} STATION
    </div>

    <div className="gold-ontime">
      <div className="gold-label">Gold</div>
      {isOnTime ? <p className="ontime">On Time</p> : <p className="delayed">Delayed</p>}
    </div>
  </div>

  <div className="wait">
    <p>{waitingMinutes} <br />mins</p>
  </div>
</div>

  );
};

export default Train;
