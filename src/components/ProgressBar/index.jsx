import React, { useState } from 'react';
import './index.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 80));
  };

  const decreaseProgress = () => {
    setProgress(prevProgress => Math.max(prevProgress - 10, 0)); 
  };

  return (
    <div className="progress-container ">
      <h5>5-misol</h5>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="buttons">
        <button className='increase' onClick={increaseProgress}>Increase +</button>
        <button className='decrease' onClick={decreaseProgress}>Decrease -</button>
      </div>
    </div>
  );
};

export default ProgressBar;
