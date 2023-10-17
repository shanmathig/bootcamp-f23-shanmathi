import React from 'react';

const Train = ({ trainData }) => {
  const { STATION, DESTINATION, HEAD_SIGN, LINE, WAITING_SECONDS, DELAY } = trainData;
  const isOnTime = DELAY === 'T0S';
  const waitingMinutes = Math.floor(parseInt(WAITING_SECONDS) / 60);  return (
    
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
  <p className={waitingMinutes === 0 ? 'ontime' : 'delayed'}>
    {waitingMinutes === 0 ? 'Arriving' : `${waitingMinutes}`}
    {waitingMinutes !== 0 && <br /> /* Add a line break */}
    {waitingMinutes !== 0 && <span className="mins">mins</span>}
</p>
    </div>
</div>
  );
};

export default Train;

// import React from 'react';

// const Train = ({ trainData }) => {
//   const { STATION, DESTINATION, HEAD_SIGN, LINE, WAITING_SECONDS, DELAY } = trainData;
//   const waitingMinutes = Math.floor(parseInt(WAITING_SECONDS) / 60);

//   return (
//     <div className={`train ${waitingMinutes === 0 ? 'on-time' : 'delayed'}`}>
//       <div className="train1">
//         <div className="big-letter">
//           <h3>M</h3>
//         </div>
//         <div className="row1">
//           <div className="info">
//             {STATION} - {DESTINATION} STATION
//           </div>
//           <div className="gold-ontime">
//             <div className="gold-label">{LINE}</div>
//             {waitingMinutes === 0 ? (
//               <p className="ontime">Arriving</p>
//             ) : (
//               <p className={waitingMinutes === 0 ? 'ontime' : 'delayed'}>
//                 {waitingMinutes === 0 ? 'On Time' : `${waitingMinutes} mins`}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Train;
