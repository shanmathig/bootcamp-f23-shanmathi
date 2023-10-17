import React from 'react';

const Train = ({ trainData }) => {
  const { STATION, DESTINATION, LINE, WAITING_SECONDS, DELAY } = trainData;
  const isOnTime = DELAY === 'T0S';
  const waitingMinutes = Math.floor(parseInt(WAITING_SECONDS) / 60);  
  const labelStyle = {backgroundColor: LINE};
  return (
    <div className={`train ${isOnTime ? 'on-time' : 'delayed'}`}>
        <div className="big-letter">
            <h3>M</h3>
        </div>

        <div className="row1">
            <div className="info">
            {STATION} &rarr; {DESTINATION} STATION
            </div>

            <div className="gold-ontime">
                <div className="gold-label" style = {labelStyle}>{LINE}</div>
                {isOnTime ? <p className="ontime">On Time</p> : <p className="delayed">Delayed</p>}
            </div>
        </div>

        <div className="wait">
            <p className={waitingMinutes === 0 ? 'ontime' : 'delayed'}>
            {waitingMinutes === 0 ? 'Arriving' : `${waitingMinutes}`}
            {waitingMinutes !== 0 && <br />}
            {waitingMinutes !== 0 && <span className="mins">mins</span>}
            </p>
        </div>
    </div>
  );
};

export default Train;
