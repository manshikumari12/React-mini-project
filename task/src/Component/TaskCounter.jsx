import React, { useState } from 'react';
import './DrageOfTask.css';

const TaskCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Count: {count}</h1>
      <button className="button increment" onClick={handleIncrement}>
        Increment
      </button>
      <button className="button decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default TaskCounter;
