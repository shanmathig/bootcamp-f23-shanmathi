import TrainList from '../components/TrainList';
import trainData from '../server/trainData';
import React, { useState } from 'react';


const LinesPage = () => {
  // You can add specific data for the Gold line if needed
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="linespage">
       <div>
      <button
        className={selectedButton === 'arriving' ? 'selected-button' : 'normal-button'}
        onClick={() => handleButtonClick('arriving')}
      >
        Arriving
      </button>
      <button
        className={selectedButton === 'scheduled' ? 'selected-button' : 'normal-button'}
        onClick={() => handleButtonClick('scheduled')}
      >
        Scheduled
      </button>
      <button
        className={selectedButton === 'monkey' ? 'selected-button' : 'normal-button'}
        onClick={() => handleButtonClick('monkey')}
      >
        Monkey
      </button>
      <button
        className={selectedButton === 'doo' ? 'selected-button' : 'normal-button'}
        onClick={() => handleButtonClick('doo')}
      >
        Doo
      </button>
    </div>
      <TrainList line="Gold" data={trainData} />
    </div>
  );
};

export default LinesPage;

