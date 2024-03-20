import React, { useState } from 'react';
import './DrageOfTask.css'; 
const TaskSum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [records, setRecords] = useState([
    'The Catcher in the Rye - A story about teenage angst and rebellion.',
    'To Kill a Mockingbird - A story about racial injustice and moral growth.',
    '1984 - A story about totalitarianism and surveillance.',
    'Pride and Prejudice - A story about love and societal expectations.',
    'The Great Gatsby - A story about the American Dream and its corruption.',
  ]);
  const [isVisible, setIsVisible] = useState(true);
  const [newRecord, setNewRecord] = useState('');

  const calculateSum = () => {
    const result = parseInt(num1) + parseInt(num2);
    setSum(result);
  };

  const addRecord = () => {
    if (newRecord.trim() !== '') {
      setRecords([...records, newRecord]);
      setNewRecord('');
    }
  };

  return (
    <div className='container'>
      <button className='hide' onClick={() => setIsVisible(true)}>Show Records</button>
      <button className='hide' onClick={() => setIsVisible(false)}>Hide Records</button>
      {isVisible && (
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      )}

      <h2>Add New Record</h2>
      <input
        className="new-record-input" 
        type="text"
        value={newRecord}
        onChange={(e) => setNewRecord(e.target.value)}
        placeholder="Enter new record"
      />
      <button className="add-record-button" onClick={addRecord}>Add Record</button>


<div className="sum-of-num">
 <h2>Calculate Sum of Two Numbers</h2>
      <input
          className="num-input sum-input"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
      className="num-input sum-input"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button className="calculate-sum-button" onClick={calculateSum} disabled={!isButtonEnabled}>
        Calculate Sum
      </button>
      <p>Sum: {sum}</p>

      <h2>Enable/Disable a Button</h2>
      <button className="toggle-button" onClick={() => setIsButtonEnabled(!isButtonEnabled)}>
        {isButtonEnabled ? 'Disable Button' : 'Enable Button'}
      </button>
</div>
     
    </div>
  );
};

export default TaskSum;
