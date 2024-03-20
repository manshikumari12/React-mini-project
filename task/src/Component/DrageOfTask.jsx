import React, { useState } from 'react';
import "./DrageOfTask.css"
const blocks = ['Today', 'Tomorrow', 'This Week', 'Next Week', 'Unplanned'];

const initialTasks = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  text: `Task ${index + 1}`,
  block: 'Unplanned'
}));

const DrageOfTask = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, block) => {
    e.preventDefault();
    if (draggedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === draggedTask.id ? { ...task, block } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };

  return (
    <div className="task-list">
      {blocks.map((block) => (
        <div
          key={block}
          className={`task-block ${block.toLowerCase().replace(/\s/g, '-')}`}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, block)}
        >
          <h2>{block}</h2>
          {tasks
            .filter((task) => task.block === block)
            .map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
              >
                {task.text}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DrageOfTask;
