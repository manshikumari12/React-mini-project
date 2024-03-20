
import React, { useState } from 'react';
import './DrageOfTask.css'; // Import the CSS file

const TaskFunny = () => {
  const [records, setRecords] = useState([
    'The Catcher in the Rye - A story about teenage angst and rebellion.',
    'To Kill a Mockingbird - A story about racial injustice and moral growth.',
    '1984 - A story about totalitarianism and surveillance.',
    'Pride and Prejudice - A story about love and societal expectations.',
    'The Great Gatsby - A story about the American Dream and its corruption.',
  ]);

  const [filter, setFilter] = useState('');
  const [filteredRecords, setFilteredRecords] = useState([]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setFilteredRecords(records.filter((record) =>
      record.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className='cont'>
      <div className="contn">
 <h2>Book Records</h2>
      <input
        className="search-input" 
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
      </div>
     
    </div>
  );
};

export default TaskFunny;
